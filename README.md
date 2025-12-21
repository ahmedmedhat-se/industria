# Industria – Artspace / Workspace Booking System

## 📋 Project Overview
**Industria** is a full‑stack booking management system designed for **artspaces and workspaces**. It enables users to book time slots, manage reservations, and view real‑time availability, while providing administrators with powerful tools to manage bookings, users, and analytics. The system enforces strict rules to prevent double bookings and ensures a smooth, reliable booking experience.

**Developed by:** Ahmed Medhat & Lucas Monir
**Project Type:** Full‑Stack Web Application
**License:** Proprietary – All rights reserved

---
## 🚀 Live Demo
> Coming soon...

---
## 🏗️ Project Structure
### Backend (Express.js – MVC Architecture)
```
server/
│   ├── config/
│   │   ├── db_config.js
│   │   └── index.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── userController.js
│   │   └── adminController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Booking.js
│   │   ├── TimeSlot.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── userRoutes.js
│   │   ├── adminRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── validationMiddleware.js
│   ├── utils/
│   │   ├── validators.js
│   │   └── jwt.js
│   ├── public/
│   └── server.js
├── .env
├── package.json
└── README.md
```

### fRONTEND (React.js)
```
client/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Alert.jsx
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── booking/
│   │   │   ├── BookingPage.jsx
│   │   │   ├── TimeSlots.jsx
│   │   │   └── BookingForm.jsx
│   │   ├── dashboard/
│   │   │   ├── UserDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── admin/
│   │   │   ├── ManageBookings.jsx
│   │   │   └── ManageUsers.jsx
│   │   └── styles.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MyBookings.jsx
│   │   └── AdminPanel.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── bookingService.js
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── hooks/
│   │   └── useAuth.js
│   ├── utils/
│   │   └── constants.js
│   ├── css/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---
## 🛠️ Technologies Used
| Technology                                                                                                                | Purpose             | Version |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)              | Runtime Environment | 18.x+   |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)          | Backend Framework   | 4.x     |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)                     | Frontend Library    | 18.x    |
| ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge\&logo=mysql\&logoColor=white)                      | Database            | 8.x     |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=jsonwebtokens\&logoColor=white)                  | Authentication      | 9.x     |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge\&logo=bootstrap\&logoColor=white)          | CSS Framework       | 5.x     |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge\&logo=axios\&logoColor=white)                      | HTTP Client         | 1.x     |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white) | Routing             | 6.x     |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge\&logo=font-awesome\&logoColor=white) | Icons               | 6.x     |

---
## ✨ Core Features
### 🔐 Authentication & Authorization
* JWT‑based authentication
* Role‑based access control (User / Admin)
* Secure password hashing with **bcrypt**
* Protected routes and APIs
* Secure session handling

### 📅 Booking Management
**User Features**
* Book available time slots (one slot per user)
* View personal bookings dashboard
* Cancel and reschedule bookings
* Track booking status (Pending / Confirmed / Cancelled)

**Admin Features**
* View and manage all bookings
* Manage users and permissions
* Control time slot availability
* Override bookings when necessary
* View booking analytics

### ⚡ Real‑Time Capabilities
* Live time slot availability
* Instant booking confirmation
* Double‑booking prevention
* Real‑time status updates
* Interactive timetable preview

### 🎨 User Interface
* Fully responsive design (Bootstrap)
* Interactive booking calendar
* Clear status indicators
* Professional modals and alerts
* Accessible and intuitive navigation

---
## 🚀 Getting Started
### Prerequisites
* **Node.js** v18 or higher
* **MySQL** v8 or higher
* **npm**

---
## 📖 API Documentation
### Authentication
* `POST /api/auth/register` – Register new user
* `POST /api/auth/login` – User login
* `POST /api/auth/logout` – User logout
* `GET /api/auth/verify` – Verify JWT token

### Bookings
* `GET /api/bookings` – Get bookings (Admin: all / User: own)
* `POST /api/bookings` – Create booking
* `PUT /api/bookings/:id` – Update booking
* `DELETE /api/bookings/:id` – Cancel booking
* `GET /api/bookings/available` – Available time slots

### Admin
* `GET /api/admin/users` – Get all users
* `PUT /api/admin/users/:id` – Update user status
* `GET /api/admin/analytics` – Booking analytics

---
## 🔒 Security Features
* Helmet.js security headers
* CORS configuration
* CSRF protection
* SQL injection prevention
* Input validation with `express-validator`
* Rate limiting
* Secure JWT refresh mechanism

---
## 📱 Dashboards
### User Dashboard
* Booking history
* Upcoming reservations
* Cancellation & rescheduling
* Profile management
* Booking status tracking

### Admin Dashboard
* Booking overview
* User management
* Time slot control
* System analytics
* Platform configuration

---
## 🤝 Contributing
This is a **proprietary project**. External contributions are **not accepted**.

---
## 📄 License
**PROPRIETARY LICENSE**
© 2025 Ahmed Medhat & Lucas Monir. All Rights Reserved.

This software and associated documentation are proprietary and confidential. No part of this project may be reproduced, distributed, or transmitted in any form without prior written permission from the authors.

---
## 👥 Authors
* **Ahmed Medhat** – Full Stack Web Developer
* **Lucas Monir** – Full Stack Web Developer