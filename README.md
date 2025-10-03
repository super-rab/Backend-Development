# Backend Development – Task 1B (Node.js + Express)

This is a simple REST API built with **Node.js** and **Express**.  
It includes basic endpoints to check server status and handle user feedback.  

---

## 🚀 Features

- **GET /status** → Returns server status message.
- **POST /feedback** → Accepts `{ name, email, message }`, validates email, and saves it in memory.
- **GET /feedback** → (Bonus) Returns all submitted feedback.
