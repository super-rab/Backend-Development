const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// In-memory array to store feedback
let feedbacks = [];

// GET /status
app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

// POST /feedback
app.post("/feedback", (req, res) => {
  const { name, email, message } = req.body;

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // Save feedback to in-memory array
  feedbacks.push({ name, email, message });
  res.status(201).json({ message: "Feedback received" });
});

// BONUS: GET /feedback
app.get("/feedback", (req, res) => {
  res.json(feedbacks);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
