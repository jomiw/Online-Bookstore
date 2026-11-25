# eShelf – Online Bookstore

A full-stack online bookstore built with **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**. eShelf allows customers to browse books, manage their shopping carts, and go through a checkout flow, while administrators can manage the bookstore's inventory.

## Overview

eShelf is a web-based bookstore that provides separate interfaces for customers and administrators, with a backend powered by Express.js and MongoDB.

The application focuses on core e-commerce functionality, database integration, and communication between the frontend and backend through REST APIs.

## Features

### Customer
- User login and signup interfaces
- Browse available books
- View book details, including title, author, price, and description
- Add books to the shopping cart
- View cart items and total price
- Checkout interface with purchase confirmation

### Admin
- Dedicated admin interface
- Add new books to the inventory
- View available books
- Manage book information
- Delete existing book listings

### Backend
- RESTful API endpoints
- MongoDB database integration using Mongoose
- Dynamic book retrieval and management
- Frontend-backend communication using the Fetch API

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Frontend structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Client-side functionality |
| Node.js | Backend runtime |
| Express.js | Server and REST APIs |
| MongoDB | Database |
| Mongoose | Database modeling |
| Fetch API | API communication |

## Screenshots

### Login Page
<img width="834" height="663" alt="image" src="https://github.com/user-attachments/assets/06fc99b2-e1b9-4d13-9e4a-c1222dd66b1b" />

### Admin Dashboard
<img width="834" height="663" alt="image" src="https://github.com/user-attachments/assets/800a69ae-fd2e-473d-bd93-9368f0bb7e54" />
<img width="914" height="308" alt="image" src="https://github.com/user-attachments/assets/0ca9d3d3-37d8-4ce7-8629-ad8385611486" />
<img width="943" height="426" alt="image" src="https://github.com/user-attachments/assets/a742603b-e31e-4e79-9892-091f35c68fb7" />

### Book Catalog
<img width="914" height="310" alt="image" src="https://github.com/user-attachments/assets/82a6db1a-5373-4f87-82d9-06939681f401" />

### Shopping Cart
<img width="943" height="462" alt="image" src="https://github.com/user-attachments/assets/d640cf92-1a78-4b20-8a94-db1d1f1cbaac" />

### Purchase Confirmation
<img width="914" height="446" alt="image" src="https://github.com/user-attachments/assets/6e5dc8ec-1ab9-4624-bc18-68e90d16af31" />

### MongoDB Database
<img width="663" height="457" alt="image" src="https://github.com/user-attachments/assets/88c9afa5-52ba-4a57-bcd3-f72414a5d75d" />
<img width="914" height="554" alt="image" src="https://github.com/user-attachments/assets/2354f8ab-5fd9-44fd-8948-e88d85eb586f" />

## Project Structure

```text
eShelf-Bookstore/
│
├── backend/
│   ├── models/
│   │   ├── Book.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── admin.html
│   ├── script.js
│   ├── style.css
│   └── js/
│       ├── login.js
│       └── signup.js
│
├── screenshots/
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/) or MongoDB Atlas
- Git

### 1. Clone the repository

```bash
git clone https://github.com/jomiw/eShelf-Bookstore.git
```

### 2. Navigate to the project directory

```bash
cd eShelf-Bookstore
```

### 3. Install dependencies

```bash
cd backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection string.

### 5. Start the server

```bash
npm start
```

The application should now be accessible at:

```text
http://localhost:5000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Retrieve all books |
| POST | `/api/books` | Add a new book |
| DELETE | `/api/books/:id` | Delete a book |
| POST | `/api/admin/login` | Admin login |
| POST | `/api/customer/login` | Customer login |

