# Product Store MERN Project

This is a simple full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to manage a list of products. It serves as a basic example of a CRUD (Create, Read, Update, Delete) application.

## How It Works

The application is composed of two main parts:

*   **Backend:** An Express.js server that provides a RESTful API for product management. It connects to a MongoDB database to store and retrieve product data.
*   **Frontend:** A React single-page application (SPA) built with Vite. It uses Chakra UI for components and Zustand for state management. Users can view, add, edit, and delete products through the user interface.

The frontend communicates with the backend's API endpoints (e.g., `/api/products`) to perform all CRUD operations.

## Technologies Used

**Backend:**
*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   `dotenv` for environment variables

**Frontend:**
*   React
*   Vite
*   Chakra UI
*   Zustand
*   React Router

## Project Structure

```
productStore/
├── backend/
│   ├── config/
│   │   └── db.js           # MongoDB connection logic
│   ├── controller/
│   │   └── product.controller.js # API logic
│   ├── models/
│   │   └── product.model.js  # Mongoose product schema
│   ├── routes/
│   │   └── product.route.js  # Express routes
│   └── server.js           # Express server entry point
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   └── store/          # Zustand state management
│   └── vite.config.js      # Vite configuration (including proxy)
└── package.json            # Backend dependencies and scripts
```

## Prerequisites

*   Node.js (v14 or later recommended)
*   npm
*   MongoDB (either a local instance or a cloud-based one like MongoDB Atlas)

## Installation and Setup

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd productStore
```

### 2. Backend Setup

The backend is managed from the root directory.

**a. Install Dependencies:**
```bash
npm install
```

**b. Configure Environment Variables:**
Create a file named `.env` in the root of the project (`productStore/`). Add your MongoDB connection string to it.

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
*   Replace `your_mongodb_connection_string` with your actual MongoDB URI.
*   The server will run on the specified `PORT`, or default to `3000`.

**c. Run the Backend Server:**
```bash
npm run dev
```
The server will start on `http://localhost:3000` (or your specified port) and will automatically restart on file changes thanks to `nodemon`.

### 3. Frontend Setup

**a. Navigate to the Frontend Directory:**
```bash
cd frontend
```

**b. Install Dependencies:**
```bash
npm install
```

**c. Run the Frontend Development Server:**
```bash
npm run dev
```
The React application will start, and you can view it in your browser at the URL provided by Vite (usually `http://localhost:5173`). The app is configured to proxy API requests to the backend server.

## Available Scripts

### Backend (from the root directory)

*   `npm run dev`: Starts the backend server in development mode with `nodemon`.

### Frontend (from the `frontend` directory)

*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the React application for production.
*   `npm run lint`: Lints the frontend code.
*   `npm run preview`: Serves the production build locally.
