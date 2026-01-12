<<<<<<< HEAD
# invite-generator
A secure, full-stack invitation management system designed for a 50th Birthday Celebration. This application handles the entire lifecycle of an invitation, from secure generation by admins to real-time scanning and verification at the venue.
=======
# Golden Jubilee Invitation System

A secure, full-stack invitation management system designed for a 50th Birthday Celebration. This application handles the entire lifecycle of an invitation, from secure generation by admins to real-time scanning and verification at the venue.

## 🚀 Key Features

### 1. Admin Generator Portal
*   **Secure Access**: Protected by a password-based login system.
*   **Smart Generation**:
    *   Generates unique, cryptographically secure invitation keys.
    *   **Duplicate Checker**: Automatically prevents creating duplicate entries for the same guest name or number.
*   **high-Quality Downloads**:
    *   **PNG/PDF Support**: Generates high-resolution access cards (using 600px QR rendering) optimized for sharing via WhatsApp or printing.
    *   **Custom Design**: Downloads feature a specific layout with the event header, QR code, and "Dress Code - All White" footer.
*   **Guest List Manager**:
    *   **Floating Action Button**: A golden button provides quick access to the guest database.
    *   **Live Status**: View all generated guests and track who has been **SCANNED** vs **PENDING**.

### 2. Guest Verification (Scanning)
*   **Real-Time Validation**: Scanning the QR code hits the backend API to verify the key instantly.
*   **Dynamic Response**:
    *   **Valid Invite**: Displays the personalized **Invitation Card** with a confetti celebration effect.
    *   **Invalid/expired**: Blocks access.
*   **Personalization**: The Confirmation Page dynamically renders the guest's name (e.g., "Distinguished Guest" or their specific name).
*   **Multiple Themes**: Supports 9 different card styles (Classic Luxury, Afrocentric, Swirls, etc.), selectable via the URL `style` parameter.

### 3. Live Event Statistics
*   **Draggable Stats Badge**: A floating, glass-morphism badge on the Confirmation Page displays real-time data:
    *   `Scanned: [Count] / Total: [Count]`
*   **Mobile Optimized**: The badge is positioned safely above mobile navigation bars and can be dragged anywhere on the screen for better visibility.

---

## 🛠️ Technical Stack

*   **Frontend**: React (Vite) + Tailwind CSS
    *   `html2canvas` & `jspdf`: For generating downloadable assets.
    *   `qrcode.react`: For dynamic QR code rendering.
    *   `canvas-confetti`: For celebration animations.
*   **Backend**: Node.js + Express
    *   `pg`: PostgreSQL client for persistent data storage.
    *   `cors` & `body-parser`: Middleware for handling API requests.
*   **Database**: PostgreSQL
    *   Hosted on Railway.
    *   Stores `invites` table with columns: `key`, `guest_name`, `created_at`, `scanned`.

## 📦 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/login` | Authenticate admin password. |
| `POST` | `/api/generate` | Generate a new unique invite key. Checks for duplicates. |
| `POST` | `/api/validate` | Verify a key. Returns validity, name, and scan count. |
| `GET` | `/api/guests` | Retrieve the full list of guests and their statuses. |
| `GET` | `/api/stats` | Get aggregate scan statistics (Total Generated vs Scanned). |

## ⚙️ Setup & Installation

1.  **Backend**:
    ```bash
    cd server
    npm install
    # Ensure .env has DATABASE_URL and ADMIN_PASSWORD
    node index.js
    ```
2.  **Frontend**:
    ```bash
    npm install
    npm run dev
    ```
3.  **Access**:
    *   **Generator**: `http://localhost:5173/?admin=true`
    *   **Scanner**: `http://localhost:5173/?key=[uuid]`

---
*Designed for a Golden Jubilee Legacy.*
>>>>>>> b8b8320 (First commit)
