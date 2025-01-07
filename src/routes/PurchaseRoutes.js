const express = require("express");
const {
  purchaseTickets,
  showAllTickets,
} = require("../controllers/purchaseTickets.controller");
const checkAdmin = require("../middlewares/protect");
const routes = express.Router();

// Ticket Purchase
routes.post("/purchase-tickets", purchaseTickets);
routes.get("/tickets/:id", checkAdmin, showAllTickets);

module.exports = routes;
