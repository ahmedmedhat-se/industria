# Industria – Backend (Booking System API)

## 📋 Overview
**Industria Backend** is a RESTful API built with **Node.js** and **Express.js** following the **MVC architecture**.  
It powers the booking logic for artspaces and workspaces, handling **authentication**, **authorization**, **booking management**, **time slot control**, and **admin analytics** with a strong focus on **security** and **data integrity**.

The API enforces strict rules to prevent double bookings and ensures reliable, scalable server-side operations.

**Developed by:** Ahmed Medhat & Lucas Monir  
**Project Type:** Backend REST API  
**License:** Proprietary – All rights reserved

---
## 🏗️ Server Architecture (MVC)
server/
│ ├── config/
│ │ ├── db_config.js
│ │ └── index.js
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── bookingController.js
│ │ ├── userController.js
│ │ └── adminController.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Booking.js
│ │ └── TimeSlot.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── bookingRoutes.js
│ │ ├── userRoutes.js
│ │ └── adminRoutes.js
│ ├── middleware/
│ │ ├── authMiddleware.js
│ │ └── validationMiddleware.js
│ ├── utils/
│ │ ├── validators.js
│ │ └── jwt.js
│ ├── public/
│ └── server.js
├── .env
├── package.json
└── README.md

---
## 🛠️ Technologies Used
| Technology | Purpose | Version |
|-----------|--------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | Runtime Environment | 18.x+ |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | Backend Framework | 4.x |
| ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) | Relational Database | 8.x |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) | Authentication | 9.x |
| ![bcrypt](https://img.shields.io/badge/bcrypt-003A8F?style=for-the-badge&logo=security&logoColor=white) | Password Hashing | Latest |
| ![Helmet](https://img.shields.io/badge/Helmet.js-000000?style=for-the-badge&logo=helmet&logoColor=white) | Security Headers | Latest |
| ![Express Validator](https://img.shields.io/badge/Express--Validator-4B32C3?style=for-the-badge&logo=checkmarx&logoColor=white) | Input Validation | Latest |

---
## ✨ Core Backend Features
### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (User / Admin)
- Secure password hashing using **bcrypt**
- Protected routes via middleware
- Token verification and refresh handling

---
### 📅 Booking Management
**User Capabilities**
- Create a booking for available time slots
- One active booking per user
- View personal bookings
- Cancel or reschedule bookings

**Admin Capabilities**
- View and manage all bookings
- Override or cancel bookings
- Control time slot availability
- Monitor booking activity

---
### ⚡ Booking Rules & Logic
- Prevents double booking at database & controller levels
- Validates overlapping time slots
- Ensures booking ownership
- Status lifecycle handling:
  - Pending
  - Confirmed
  - Cancelled

---
## 🔒 Security Measures
- Helmet.js for secure HTTP headers
- CORS configuration
- CSRF protection
- SQL injection prevention
- Input validation middleware
- Rate limiting
- Secure JWT handling

---
## 🚀 Getting Started
### Prerequisites
- **Node.js** v18+
- **MySQL** v8+
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