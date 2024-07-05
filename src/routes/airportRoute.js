const express = require("express");

// Airport Logic
const airportController = require("./../controllers/airport");

const router = express.Router();

router.route("/:iataCode").get(airportController.getAirportDataByIataCode);

module.exports = router;
