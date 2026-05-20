# 📚 MERN Stack E-Commerce Bookstore Application

Welcome to the **MERN Stack Bookstore**, a complete full-stack web application designed for browsing books, managing a shopping cart, and handling user accounts securely. This project features a clean separation of concerns with a dedicated frontend client and a robust backend API server.

---

## 🛠️ Tech Stack & Architecture

### Frontend (Client)
* **React.js** (Built with **Vite** for lightning-fast development)
* **React Router DOM** (For smooth navigation between Login, Register, and Bookstore views)
* **Custom CSS3** (Designed with a clean, professional corporate Light Theme layout)

### Backend (Server)
* **Node.js** & **Express.js** (RESTful API development)
* **MongoDB Atlas** (Cloud database storage managed via **Mongoose ODM**)
* **Dotenv** (Environment variables management for high security)

---

## 📂 Project Directory Structure

```text
BOOKSTORE-PROJECT/
├── bookstore-client/      # React Frontend (Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI elements (Navbar, Cards)
│   │   ├── App.jsx        # Main routing and page structure
│   │   └── App.css        # Custom light theme styling definitions
│   └── package.json
│
├── server/                # Node.js / Express Backend
│   ├── controllers/       # API business logic handlers
│   ├── models/            # Mongoose schemas (Book, User definitions)
│   ├── routes/            # Express endpoint routing paths
│   ├── .env               # Protected environment variables (Local only)
│   ├── server.js          # Backend server entry point file
│   └── package.json
│
└── .gitignore             # Root level Git ignore configurations

🚀 Local Installation & Setup Guide
Follow these sequential steps to get the entire application running locally on your workstation:

1. Clone the Project
Bash
git clone [https://github.com/roh155/mern-bookstore-app.git](https://github.com/roh155/mern-bookstore-app.git)
cd mern-bookstore-app
2. Configure Backend Server
Navigate to the server folder and install dependencies:

Bash
cd server
npm install
Create a .env file inside the server/ directory and configure your MongoDB connection parameters securely:

Code snippet
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bookstore
Start the backend server execution:

Bash
npm start
# or 'npm run dev' if nodemon is configured
3. Configure Frontend Client
Open a secondary terminal window, navigate to the client folder, and initialize dependencies:

Bash
cd bookstore-client
npm install
Launch the Vite local development instance:

Bash
npm run dev
🔒 Security Practices Demonstrated
Database Credentials Protection: Hardcoded database connection strings are fully omitted. Secure environment variables (.env) are utilized instead.

Smart Version Control: The master structural .gitignore blocks deployment pipelines from accidentally tracking local environment tokens or node_modules/ caches to the cloud.

