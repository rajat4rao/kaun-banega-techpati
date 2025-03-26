
# Kaun Banega Techpati - Technical Trivia Quiz Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Welcome to Kaun Banega Techpati, a dynamic and engaging quiz application built using the MERN stack (MongoDB, Express.js, React, Node.js). Test your knowledge across various technology domains, earn points, climb the leaderboard, and become a true "Techpati"!

## Table of Contents

1.  [Overview](#overview)
2.  [Live Demo](#live-demo)
3.  [Features](#features)
4.  [Technology Stack](#technology-stack)
5.  [Project Structure](#project-structure)
6.  [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Environment Variables](#environment-variables)
    *   [Running the Application](#running-the-application)
7.  [API Endpoints](#api-endpoints)
8.  [Future Enhancements](#future-enhancements)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Overview

Kaun Banega Techpati is a full-stack web application designed for tech enthusiasts to test and improve their knowledge in areas like Linux, Bash, Docker, Kubernetes, various programming languages, and general coding concepts. Users can register, log in, select quizzes based on topic and difficulty, track their progress through a points and leveling system, and compete on a global leaderboard.

This project demonstrates proficiency in:

*   Full-stack development using the MERN stack.
*   RESTful API design and implementation.
*   User authentication and management.
*   Database modeling and interaction (MongoDB with Mongoose).
*   Frontend development with React, including state management, routing, and component-based architecture.
*   Responsive UI/UX design using Tailwind CSS.
*   Integration with external APIs (QuizAPI).
*   Handling file uploads for user profiles.

## Live Demo 

*[https://kaun-banega-techpati.netlify.app/]*


## Features

*   **User Authentication:** Secure registration and login using bcryptjs for password hashing.
*   **Profile Management:** Users can view their profile, points, and level. Option to update username and profile picture.
*   **Quiz Selection:** Browse quizzes by topic (Linux, Docker, HTML, etc.) and general categories (Code, General).
*   **Difficulty Levels:** Choose from Easy, Medium, or Hard difficulty for each quiz.
*   **Interactive Quiz Interface:** Engage with multiple-choice questions fetched from QuizAPI.
*   **Scoring System:** Earn points based on difficulty and correctness. Bonus points for perfect scores.
*   **Leveling System:** Progress through different levels (Trainee, Junior, Middle, Senior, Expert, Sensei) based on accumulated points. Visual indicators (profile borders, progress bars) reflect the user's level.
*   **Leaderboard:** View the top players based on points.
*   **Responsive Design:** Fully functional and visually appealing on various screen sizes (desktop, tablet, mobile).
*   **RESTful Backend API:** Well-defined endpoints for managing users and quiz interactions.

                   |

## Technology Stack

### Backend

*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **MongoDB:** NoSQL database for storing user data and quiz results.
*   **Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.
*   **bcryptjs:** Library for hashing passwords.
*   **Multer / Multer-GridFS-Storage:** Middleware for handling `multipart/form-data`, used for profile picture uploads stored in MongoDB GridFS.
*   **dotenv:** Module for loading environment variables from a `.env` file.
*   **CORS:** Middleware for enabling Cross-Origin Resource Sharing.
*   **Nodemon:** Utility for auto-restarting the Node.js server during development.

### Frontend

*   **React:** JavaScript library for building user interfaces.
*   **Vite:** Next-generation frontend tooling for fast development and optimized builds.
*   **React Router DOM:** Library for declarative routing in React applications.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **Headless UI:** Unstyled, fully accessible UI components.
*   **React Awesome Reveal:** Library for reveal animations on scroll.
*   **Axios / Fetch API:** For making HTTP requests to the backend API and QuizAPI.
*   **Prop Types:** Runtime type checking for React props.
*   **React Placeholder Loading:** Component for displaying placeholder content while data is loading.

### External APIs

*   **QuizAPI.io:** Used to fetch quiz questions.

## Project Structure

The project is organized into two main directories: `client` and `server`.

```
kaun-banega-techpati-main/
├── client/                 # React Frontend Application (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Static assets (images, svgs)
│   │   ├── components/     # Reusable React components (Header, QuizCard, etc.)
│   │   │   ├── home/
│   │   │   ├── leaderboard/
│   │   │   ├── quizpage/
│   │   │   ├── quizzes/
│   │   │   └── user/
│   │   ├── App.jsx         # Main application component with routing
│   │   ├── main.jsx        # Entry point for the React app
│   │   └── index.css       # Global styles / Tailwind directives
│   ├── index.html          # Main HTML file
│   ├── package.json
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Node.js Backend Application (Express)
│   ├── models/             # Mongoose models (e.g., User.js)
│   ├── routes/             # API route definitions (e.g., userRoutes.js)
│   ├── controllers/        # Route handler logic 
│   ├── middleware/         # Custom middleware (e.g., auth, file upload)
│   ├── config/             # Database connection, etc. 
│   ├── index.js            # Main server entry point
│   ├── package.json
│   └── .env                # Environment variables (ignored by git)
│
├── .gitignore
└── README.md               # This file
```

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   **Node.js:** Version 18.x or later recommended (includes npm).
*   **MongoDB:** Ensure you have a running MongoDB instance (local or cloud-based like MongoDB Atlas).
*   **QuizAPI Key:** Obtain an API key from [QuizAPI.io](https://quizapi.io/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/kaun-banega-techpati-main.git
    cd kaun-banega-techpati-main
    ```

2.  **Install Server Dependencies:**
    ```bash
    cd server
    npm install
    ```

3.  **Install Client Dependencies:**
    ```bash
    cd ../client
    npm install
    ```

### Environment Variables

You need to create `.env` files for both the server and client directories.

1.  **Server `.env` (`server/.env`):**
    Create a file named `.env` in the `server` directory and add the following variables:
    ```env
    # MongoDB Connection String
    MONGO_URI=your_mongodb_connection_string

    # Port for the server to run on
    PORT=3000 # Or any other preferred port
    ```

2.  **Client `.env` (`client/.env`):**
    Create a file named `.env` in the `client` directory and add the following variables:
    ```env
    # URL of your running backend server
    VITE_BASE_URL=http://localhost:3000 # Adjust if your server runs on a different port

    # Your QuizAPI.io API Key
    VITE_QUIZ_API_KEY=your_quizapi_key
    ```

    *Note: Remember to add `.env` files to your `.gitignore` to avoid committing sensitive information.*

### Running the Application

1.  **Start the Backend Server:**
    Navigate to the `server` directory and run:
    ```bash
    # For development with auto-restart using Nodemon
    npm run dev

    # OR for production mode
    # npm run server
    ```
    The server should start, typically on `http://localhost:3000`.

2.  **Start the Frontend Client:**
    Navigate to the `client` directory in a *separate terminal* and run:
    ```bash
    npm run dev
    ```
    The client development server (Vite) should start, typically on `http://localhost:5173`.

3.  **Access the Application:**
    Open your web browser and navigate to the client URL (e.g., `http://localhost:5173`).

## API Endpoints

The backend provides the following RESTful API endpoints (base URL usually `/`):

| Method | Endpoint                  | Description                             | Authentication |
| :----- | :------------------------ | :-------------------------------------- | :------------- |
| POST   | `/user/register`          | Register a new user                     | None           |
| POST   | `/user/login`             | Log in an existing user                 | None           |
| GET    | `/user/:userId`           | Get user data by ID                     | Required       |
| GET    | `/user/username/:username`| Get user data by username               | None           |
| PUT    | `/user/:userId`           | Update user points                      | Required       |
| PUT    | `/user/username/:userId`  | Update user's username                  | Required       |
| PUT    | `/user/picture/:userId`   | Update user's profile picture           | Required       |
| GET    | `/leaderboard/:limit`     | Get top users for the leaderboard       | None           |

*(Authentication details might need refinement based on your actual implementation, e.g., using JWT)*

## Future Enhancements

*   **More Quiz Categories:** Expand the range of topics available.
*   **Different Question Types:** Introduce true/false, fill-in-the-blanks, or coding challenge questions.
*   **Admin Panel:** Add an interface for managing quizzes and users.
*   **Real-time Leaderboard:** Implement WebSockets for live leaderboard updates.
*   **Improved UI/UX:** Enhance visual design, add more animations, and improve user feedback.
*   **Unit & Integration Tests:** Implement testing suites for both frontend and backend.
*   **Password Reset Functionality:** Add a secure way for users to reset forgotten passwords.
*   **Social Login:** Allow users to log in via Google, GitHub, etc.

## Contributing

Contributions are welcome! If you have suggestions or find bugs, please open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` file (if created) or [MIT License](https://opensource.org/licenses/MIT) for more information.

## Contact

Rajat Rao - [GitHub Profile](https://github.com/rajat4rao) - [LinkedIn Profile](https://www.linkedin.com/in/rajat-p-rao-b09365140/) - `[balprao@gmail.com]`

Project Link: [https://kaun-banega-techpati.netlify.app](https://kaun-banega-techpati.netlify.app/)

