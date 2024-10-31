# Project Backend Overview

This is the backend part of the project, built using **Node.js**, **Express.js**, and **MongoDB**. The backend is responsible for handling API requests, managing the database user authentication with JWT tokens. This readme will guide you through setting up the project, understanding the logic, and contributing to the backend development.

## Getting Started

To start working on this project, follow the steps below.

### 1. Setup `.env` File

Before you begin, create a `.env` file in the `Backend` directory. This file will store environment variables such as database credentials and JWT secret. Your `.env` file should include the following:

```bash
MONGODB_URI=<Your MongoDB Database URI>
JWT_SECRET=<Any random characters as your JWT secret>
PORT=<Port number for the server>
```

### 2. Installation 

```bash
npm install
```
####  Development mode 

```bash
npm run dev
```
####  Production mode 

```bash
npm run start
```

# Backend Key Features

## 1. Express Server Setup
The server is built with **Express.js** to handle HTTP requests and route management. It listens on a specified port and provides API endpoints for frontend interaction.

Some of the key features of the server include:

- **Middleware**: Middleware functions are used to parse incoming requests, handle CORS, and log requests.
- **Routing**: The server includes routes for user authentication, error handling, and other API endpoints.


## 2. MongoDB Connection
The server connects to **MongoDB** using **Mongoose**, allowing for schema-based modeling of application data. The `connectToDatabase` function initializes this connection.

## 3. Authentication System
**JWT (JSON Web Tokens)** are used for secure user authentication. Routes for signup, login, and logout are provided. Upon successful login, a JWT token is returned to the client via a cookie, and user data is stored in the MongoDB database.

Some of the key features of the authentication system include:

- **Password Hashing**: User passwords are hashed using the `bcrypt` library before being stored in the database.
- **Token Expiration**: JWT tokens have an expiration time to enhance security.
- **Logout**: Users can log out by clearing the JWT cookie.
- **Protected Routes**: Middleware functions verify the JWT token before allowing access to protected routes.


## 4. User Model
A **Mongoose** model is used to define the structure of user data (email, hashed password, etc.). The schema includes methods for password validation and hashing.

## 5. Error Handling
The server includes basic error handling, such as managing port conflicts and closing database connections if critical server issues occur.

---


