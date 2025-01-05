const express = require("express");
const {
  purchaseTickets,
  showAllTickets,
} = require("../controllers/purchaseTickets.controller");
const routes = express.Router();

// Ticket Purchase
routes.post("/purchase-tickets", purchaseTickets);
routes.get("/tickets", showAllTickets);

module.exports = routes;
