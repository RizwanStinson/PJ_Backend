const express = require("express");
const {
  purchaseTickets,
  showAllTickets,
} = require("../controllers/purchaseTickets.controller");
const checkAdmin = require("../middlewares/protect");
const buyTicket = require("../controllers/ticket.controller");
// const { buyTicket } = require("../controllers/ticket.controller");
const routes = express.Router();

// Ticket Purchase
routes.post("/purchase-tickets", buyTicket);
routes.get("/tickets/:id", checkAdmin, showAllTickets);

module.exports = routes;
