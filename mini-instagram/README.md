# Mini Instagram

A simple web application built to learn and demonstrate core back-end concepts using Node.js. It allows users to create accounts, upload pictures, view a feed of everyone's posts, and manage their own pictures.

## Features

*   **User Registration & Login:** Create an account and log in securely.
*   **Create Posts:** Upload an image and add a caption to share with others.
*   **Global Feed:** View a paginated feed of all posts created by all users.
*   **User Profile:** View all the posts you have created.
*   **Edit & Delete:** Update the caption or completely delete posts that you own.

## What I Used (Tech Stack)

*   **Node.js:** The core runtime environment that runs the server.
*   **Express.js:** The framework used to build the web server and handle different routes (like going to `/login` or `/profile`).
*   **MongoDB:** The database used to save all the users and posts securely.
*   **Mongoose:** A tool to make talking to MongoDB easier from inside our Node.js code.
*   **EJS (Embedded JavaScript):** The templating engine used to build the HTML pages (views) that the user sees in the browser.
*   **Tailwind CSS:** Used via CDN to quickly style the pages and make them look good.
*   **Multer:** A special tool (middleware) to handle uploading the image files from the browser to the server.
*   **JSON Web Tokens (JWT):** The method used to keep users logged in securely so they don't have to keep entering their password.
*   **Bcrypt:** Used to securely scramble (hash) user passwords before saving them to the database.

## How to Run It

1.  Make sure you have **Node.js** installed on your computer.
2.  Make sure you have **MongoDB** installed and running on your computer locally (at `mongodb://127.0.0.1:27017`).
3.  Open a terminal inside this project folder.
4.  Run `npm install` to download all the necessary tools.
5.  Run `npm run dev` to start the server.
6.  Open a web browser and go to `http://127.0.0.1:3000`.
