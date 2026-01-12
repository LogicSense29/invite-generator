require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL Pool Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

app.use(cors());
app.use(bodyParser.json());

// Initialize Database Table
const initDb = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS invites (
                id SERIAL PRIMARY KEY,
                key TEXT UNIQUE NOT NULL,
                guest_name TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                scanned BOOLEAN DEFAULT FALSE,
                scanned_at TIMESTAMP
            );
        `);
        console.log("Database initialized (invites table ready).");
    } catch (err) {
        console.error("Error initializing database:", err);
    }
};

initDb();

// --- API ROUTES ---

// 1. Generate Invite
app.post('/api/generate', async (req, res) => {
    const { guestName } = req.body;
    if (!guestName) return res.status(400).json({ error: 'Guest name required' });

    try {
        // Check if name is purely numeric
        const isNumeric = /^\d+$/.test(guestName.trim());
        let key;

        if (isNumeric) {
            const uuid = Math.random().toString(36).substring(2, 8);
            key = `guest_${guestName.trim()}_${uuid}`;
        } else {
            const cleanName = guestName.toLowerCase().replace(/\s+/g, '_');
            const randomStr = Math.random().toString(36).substring(2, 7);
            key = `${cleanName}_${randomStr}`;
        }

        // Check for duplicates
        const existing = await pool.query('SELECT * FROM invites WHERE guest_name = $1', [guestName]);
        if (existing.rows.length > 0) {
            return res.status(409).json({ error: 'Guest Name/Number already exists' });
        }

        const result = await pool.query(
            'INSERT INTO invites (key, guest_name) VALUES ($1, $2) RETURNING key',
            [key, guestName]
        );

        console.log(`[Generated] ${guestName} (Key: ${key})`);
        res.json({ key: result.rows[0].key });
    } catch (err) {
        console.error("Generate error:", err);
        res.status(500).json({ error: 'Database error' });
    }
});

// 2. Validate Invite (Scanning)
app.post('/api/validate', async (req, res) => {
    const { key } = req.body;
    if (!key) return res.status(400).json({ error: 'Key required' });

    try {
        const result = await pool.query('SELECT * FROM invites WHERE key = $1', [key]);

        if (result.rows.length === 0) {
            console.log(`[Invalid Scan] Key: ${key}`);
            return res.json({ valid: false, message: 'Invalid Invite Code' });
        }

        const invite = result.rows[0];

        if (!invite.scanned) {
            // Mark as scanned
            await pool.query(
                'UPDATE invites SET scanned = true, scanned_at = NOW() WHERE key = $1',
                [key]
            );
            console.log(`[Scanned] ${invite.guest_name}`);
        } else {
             console.log(`[Re-Scanned] ${invite.guest_name}`);
        }

        // Get Stats
        const statsResult = await pool.query('SELECT COUNT(*) as total, COUNT(*) FILTER (WHERE scanned = true) as scanned_count FROM invites');
        const stats = {
            total: parseInt(statsResult.rows[0].total),
            scannedCount: parseInt(statsResult.rows[0].scanned_count)
        };

        res.json({ 
            valid: true, 
            guestName: invite.guest_name, 
            scanned: invite.scanned, // Return original status to show "Already Scanned" if valid but reused
            stats 
        });

    } catch (err) {
        console.error("Validate error:", err);
        res.status(500).json({ error: 'Database error' });
    }
});

// 3. Admin Login
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD) {
        // Return a simple 'token' (just a flag for now)
        res.json({ success: true, token: 'admin-authorized' });
    } else {
        res.json({ success: false, message: 'Invalid Password' });
    }
});

// 4. Stats
app.get('/api/stats', async (req, res) => {
    try {
         const statsResult = await pool.query('SELECT COUNT(*) as total, COUNT(*) FILTER (WHERE scanned = true) as scanned_count FROM invites');
         res.json({
            total: parseInt(statsResult.rows[0].total),
            scannedCount: parseInt(statsResult.rows[0].scanned_count)
         });
    } catch (err) {
        console.error("Stats error:", err);
        res.status(500).json({ error: 'Database error' });
    }
});

// 5. Get All Guests
app.get('/api/guests', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM invites ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error("Error fetching guests:", err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
