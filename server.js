const express = require("express");

const app = express();
const PORT = 3000;

// GET /orders
app.get("/orders", (req, res) => {
  console.log("GET /orders");
  res.send("Here is the list of all orders.");
});

// POST /orders
app.post("/orders", (req, res) => {
  console.log("POST /orders");
  res.send("A new order has been created.");
});

// GET /users
app.get("/users", (req, res) => {
  console.log("GET /users");
  res.send("Here is the list of all users.");
});

// POST /users
app.post("/users", (req, res) => {
  console.log("POST /users");
  res.send("A new user has been added.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
