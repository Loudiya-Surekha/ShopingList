# 🎯 Shopping List System

A full-stack **Shopping List System** that allows users to **register, log in, and manage their shopping items** securely. Users can add, update, delete, and mark items as purchased. Built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with JWT-based authentication.

---

## 🔹 Features

* **User Authentication**: Secure signup and login with hashed passwords.
* **Item Management**: CRUD operations for shopping items.
* **Mark as Purchased**: Easily track purchased items.
* **Responsive Design**: Works seamlessly on desktop and mobile devices.
* **Data Security**: Each user sees only their own items.

---

## 🛠 Technology Stack

* **Frontend**: React.js, Axios, React Router
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JWT, bcryptjs
* **Validation**: express-validator

---

## 📁 Project Structure

### **Backend**

```
backend/
├─ server.js                 # Entry point
├─ .env                      # Environment variables
├─ routes/
│   ├─ authRoutes.js
│   └─ itemRoutes.js
├─ controllers/
│   ├─ authController.js
│   └─ itemController.js
├─ models/
│   ├─ User.js
│   └─ Item.js
├─ middleware/
│   └─ auth.js
└─ lib/
    └─ db.js
```

### **Frontend**

```
frontend/
├─ index.html
├─ package.json
├─ src/
│   ├─ App.jsx
│   ├─ main.jsx
│   ├─ pages/
│   │   ├─ Signup.jsx
│   │   ├─ Login.jsx
│   │   └─ Home.jsx
│   ├─ components/
│   │   ├─ SignupForm.jsx
│   │   ├─ LoginForm.jsx
│   │   └─ ItemList.jsx
│   ├─ store/
│   │   └─ authStore.jsx
│   └─ lib/
│       └─ api.js
```

---

## ⚡ Getting Started

### **1. Backend Setup**

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

4. Start the server:

```bash
npm run dev
```

The backend runs at: `http://localhost:5000`

---

### **2. Frontend Setup**

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

The frontend runs at: `http://localhost:5173` (or the port Vite assigns)

---

## 🔗 **API Endpoints**

### **Auth**

| Method | Route            | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | /api/auth/signup | Register new user        |
| POST   | /api/auth/login  | Login user and get token |

### **Items**

| Method | Route          | Description                          |
| ------ | -------------- | ------------------------------------ |
| GET    | /api/items     | Get all items for the logged-in user |
| POST   | /api/items     | Create a new item                    |
| PUT    | /api/items/:id | Update an existing item              |
| DELETE | /api/items/:id | Delete an item                       |

> **Note:** Items routes are **protected** — you need to send the **JWT token** in the `Authorization` header:

```
Authorization: Bearer <token>
```

---

## 👤 Usage Flow

1. **Signup** → create a new account.
2. **Login** → access the dashboard/home page.
3. **Home Page** → manage shopping items (add, edit, delete, mark purchased).
4. **Logout** → return to the login page.

---

## 📝 Notes

* Ensure MongoDB is running locally or provide a cloud URI.
* Passwords are hashed using **bcryptjs**.
* JWT tokens are stored in localStorage on the frontend.
* Frontend routes:

  * `/` → Signup
  * `/login` → Login
  * `/home` → Home (dashboard)

---

## 🚀 Conclusion

The **Shopping List System** provides a complete full-stack application for managing shopping tasks securely and efficiently. It demonstrates modern web development practices using **MERN stack**, authentication, and responsive frontend design.
