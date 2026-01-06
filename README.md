# Restaurant Ordering System

## Project Description
This is a full-stack web application that allows users to browse a restaurant menu,
select food and drinks, place orders, and send contact messages.
The backend is built using Node.js and Express, with MySQL as the database.
The frontend is built using React.

The project demonstrates client-server communication, database integration,
CRUD operations, version control, and backend deployment.

---

## Technologies Used
- Frontend: React.js
- Backend: Node.js (Express)
- Database: MySQL
- HTTP Client: Axios / Fetch
- Version Control: Git & GitHub
- Backend Hosting: Render

---

## Features
- Dynamic menu loaded from database
- Food and drink categories
- Order placement with quantity and notes
- Orders stored in MySQL database
- Contact form with messages saved to database
- REST API backend

---

## Database Structure

### Tables Used:
- `menu` – stores food and drink items
- `orders` – stores customer orders
- `contact_messages` – stores contact form messages

The database is created and managed using MySQL and phpMyAdmin during development.

---

## API Endpoints (Backend)
- `GET /api/categories` – get food and drink categories
- `GET /api/menu/:main/:sub` – get items by category
- `GET /api/item/:name` – get single item details
- `POST /api/orders` – save order
- `POST /api/contact` – save contact message

---

## Live Backend (Render)
The backend is deployed on Render and accessible at:

https://restaurant-full.onrender.com

---

## Setup Instructions (Local Development)

### Backend
1. Clone the repository
2. Navigate to backend folder
3. Run `npm install`
4. Configure MySQL database
5. Run backend using:
   ```bash
   node server.js

