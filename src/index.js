require("dotenv").config();

const express = require("express");
const Routes = require("./routes/index");
const db = require("./models/index");
const Middlewares = require("./middlewares/index");

const app = express();

// Cors configuration
app.use(Middlewares.cors);

// Parse JSON
app.use(express.json());

// Initialize DB
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.original);
  });

// Route Configuration
app.use("/api", Routes);

app.use((req, res) => {
  res.header("Content-Type", "application/json");
  res.status(404);
  res.send({ message: "Not Found" });
});

// Listen on Port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});

module.exports = app;
