# Mini Instagram

A lightweight social media application built with Node.js and Express that allows users to create accounts, share posts, and interact with a feed.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Project Files](#project-files)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure sign up and login functionality
- **Create Posts**: Upload and share posts with images to the community
- **View Feed**: Browse posts from all users in a unified feed
- **My Posts**: View, edit, and manage your own published posts
- **Edit Posts**: Update your existing posts with new content
- **Image Upload**: Upload images to accompany your posts
- **Session Management**: Secure session-based authentication
- **Responsive Design**: Works across different screen sizes

## Project Structure

```
mini-instagram/
├── server.js                 # Main Express server entry point
├── package.json             # Project dependencies and metadata
├── middleware/
│   └── checkAuth.js         # Authentication middleware for protected routes
├── models/
│   ├── Post.js              # Post data model and database schema
│   └── User.js              # User data model and database schema
├── routes/
│   ├── auth.js              # Authentication routes (login, signup)
│   └── posts.js             # Post management routes (create, edit, delete)
├── views/
│   ├── login.ejs            # Login page template
│   ├── signup.ejs           # Sign up page template
│   ├── feed.ejs             # Main feed page template
│   ├── upload.ejs           # Upload new post page template
│   ├── edit.ejs             # Edit post page template
│   └── my-posts.ejs         # User's posts management page template
├── uploads/                 # Directory for storing uploaded images
└── README.md               # Project documentation (this file)
```

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Setup Steps

1. **Clone or download the project**:
```bash
cd mini-instagram
```

2. **Install dependencies**:
```bash
npm install
```

3. **Create necessary directories**:
```bash
mkdir uploads
```

4. **Configure environment variables** (if needed):
Create a `.env` file in the root directory with your configuration settings.

## Configuration

Update the following in your `server.js` file as needed:

- **Port**: Default is 3000 (can be changed via environment variable)
- **Session Secret**: Configure session management settings
- **Database Connection**: Set up your database connection string
- **Upload Path**: Configure where uploaded images are stored

## Running the Application

### Start the Server

Using npm (if configured in package.json):
```bash
npm start
```

Or directly with Node:
```bash
node server.js
```

### Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

## Technologies Used

- **Backend Framework**: Express.js (Node.js)
- **Frontend Templating**: EJS (Embedded JavaScript)
- **Runtime**: Node.js
- **Session Management**: Express-session (or similar)
- **Authentication**: Custom middleware-based authentication
- **Database**: [Configured in your models]
- **File Upload**: Express middleware for multipart/form-data

## Project Files

### Core Application Files

#### `server.js`
Main application server file that initializes Express, configures middleware, and sets up routes.

#### `models/`
- **User.js**: Defines user schema and database operations
- **Post.js**: Defines post schema and database operations

#### `routes/`
- **auth.js**: Handles user authentication (signup, login, logout)
- **posts.js**: Manages post operations (create, read, update, delete)

#### `middleware/`
- **checkAuth.js**: Middleware to verify user authentication on protected routes

#### `views/`
EJS templates for rendering HTML pages:
- **login.ejs**: User login form
- **signup.ejs**: New user registration form
- **feed.ejs**: Display all posts from all users
- **upload.ejs**: Form to create and upload new posts
- **my-posts.ejs**: User's own posts with edit/delete options
- **edit.ejs**: Form to edit existing posts

## Usage

### Getting Started

1. **Sign Up**:
   - Navigate to the signup page
   - Fill in your username/email and password
   - Click "Sign Up" to create your account

2. **Login**:
   - Go to the login page
   - Enter your credentials
   - Click "Login" to access your account

3. **Create a Post**:
   - Navigate to the upload page
   - Add post content
   - Upload an image
   - Click "Post" to share with the community

4. **Browse Feed**:
   - View all posts from other users
   - See post creation dates and usernames
   - Engage with community content

5. **Manage Your Posts**:
   - Go to "My Posts" section
   - View all your published posts
   - Edit posts to update content
   - Delete posts you no longer want

## API Routes

### Authentication Routes (`/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Create a new user account |
| POST | `/auth/login` | Authenticate and login user |
| POST | `/auth/logout` | Logout current user |

### Post Routes (`/posts`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts/feed` | Retrieve all posts for the feed |
| POST | `/posts/create` | Create a new post (requires authentication) |
| GET | `/posts/my-posts` | Get current user's posts (requires authentication) |
| GET | `/posts/:id` | Get a specific post by ID |
| PUT | `/posts/:id` | Update a post (requires authentication) |
| DELETE | `/posts/:id` | Delete a post (requires authentication) |

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.
