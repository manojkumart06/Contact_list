# Contact List App using Express and MongoDB

## Table of Contents

- [Introduction](#introduction)
- [Setup and Installation](#setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Application Features](#application-features)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributors](#contributors)
- [License](#license)
- [GitHub Repository](#github-repository)

## Introduction

This is a web-based contact list application built using Express.js as the backend framework and MongoDB as the database. It provides functionality to view a list of contacts, add new contacts, and delete existing contacts.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. **Clone the repository:**
    ```bash
    git clone <This repository>
    cd contact-list-app
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Configure Database:**
    - Open the `config/mongoose.js` file.
    - Update the `db` variable with the appropriate MongoDB connection URL.

4. **Run the Application:**
    ```bash
    npm start
    ```

    The application will be accessible at `http://localhost:8000`.

## Application Features

- **Home Page:**
    - View a list of contacts.

- **Practice Page:**
    - A playground for practicing and testing.

- **Create a Contact:**
    - Access the `/create-contact` route to add a new contact.
    - Fill in the name and phone number, then submit the form.

- **Delete a Contact:**
    - On the home page, each contact has a delete button.
    - Click the delete button to remove a contact from the list.

## Project Structure

- **`assets/`:** Static assets (CSS, images, etc.).
- **`config/`:** Database configuration.
- **`models/`:** MongoDB models (e.g., Contact model).
- **`views/`:** EJS templates for rendering pages.
- **`app.js`:** Express application setup and routing.
- **`package.json`:** Project dependencies and scripts.

## Dependencies

- **Express.js:** Web application framework.
- **MongoDB:** Database for storing contact information.
- **Mongoose:** MongoDB object modeling for Node.js.
- **EJS:** Templating engine for rendering views.
- **Body-parser:** Middleware for parsing incoming request bodies.
- **Nodemon (devDependency):** Automatically restarts the server during development.

## Contributors

- [Manoj Kumar]

## License

This project is licensed under the [MIT License](LICENSE).

## Application Screenshots

![Home Page](https://github.com/manojkumart06/Contact_list/assets/61974981/c64a8258-19da-471f-80f8-f80c370be345)
