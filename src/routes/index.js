const Router = require("express").Router();
const Airport = require("./airportRoute");

// simple test route
Router.get("/", (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

Router.use("/airport", Airport);

module.exports = Router;
