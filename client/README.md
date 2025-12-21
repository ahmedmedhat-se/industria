# Industria – Client (Booking System UI)

## 📋 Overview
**Industria Client** is the frontend application for the Industria booking platform.  
It provides a modern, responsive, and user-friendly interface that allows users to browse available time slots, manage bookings, and interact seamlessly with the booking system.

The client focuses on **usability**, **performance**, and **clean UI/UX**, ensuring a smooth experience across all devices.

**Developed by:** Ahmed Medhat & Lucas Monir  
**Project Type:** Frontend Web Application  
**License:** Proprietary – All rights reserved

---
## 🏗️ Client Structure
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
| Technology | Purpose | Version |
|-----------|--------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | UI Library | 18.x |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | Build Tool | Latest |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) | CSS Framework | 5.x |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) | HTTP Client | 1.x |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) | Client Routing | 6.x |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white) | Icons | 6.x |

---
## ✨ Core Client Features
### 🔐 Authentication UI
- Login and registration pages
- JWT-based session handling (via API)
- Protected routes
- Role-based navigation (User / Admin)
- Persistent login state

---
### 📅 Booking Interface
**User Features**
- View available time slots
- Create bookings
- View booking history
- Cancel or reschedule bookings
- Booking status indicators

**Admin Features**
- Booking overview dashboard
- User management views
- Time slot control interface
- Analytics & statistics views

---
### 🎨 UI / UX
- Fully responsive layout
- Clean and modern design
- Interactive modals and alerts
- Accessible navigation
- Dashboard-driven layout
- Optimized user flows

---
## ⚡ Client Logic
- Centralized API service using Axios
- Global authentication context
- Route guards for protected pages
- Reusable UI components
- Modular and scalable structure

---
## 🚀 Getting Started
### Prerequisites
- **Node.js** v18+
- **npm**

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