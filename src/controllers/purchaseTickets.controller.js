// const TicketPurchases = require("../models/ticketPurchase.model");
// const mongoose = require("mongoose");

// exports.purchaseTickets = async (req, res) => {
//   try {
//     const { selectionType, ticketQuantity, price } = req.body;
//     if (!selectionType || !ticketQuantity || !price) {
//       res.status(404).json({ message: "all fields are required" });
//     }

//     const newTicketPurchase = new TicketPurchases({
//       selectionType,
//       ticketQuantity,
//       price,
//     });

//     await newTicketPurchase.save();

//     return res.status(200).json({ message: "ticket purchase success" });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ message: "failed to purchase tickets", error: error.message });
//   }
// };

// exports.showAllTickets = async (req, res) => {
//   try {
//     const tickets = await TicketPurchases.find({});
//     return res
//       .status(200)
//       .json({ status: 200, message: "all tickets", data: tickets });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ message: "failed to purchase tickets", error: error.message });
//   }
// };

const TicketPurchases = require("../models/ticketPurchase.model");
const mongoose = require("mongoose");

exports.purchaseTickets = async (req, res) => {
  try {
    const { selectionType, ticketQuantity, price } = req.body;
    if (!selectionType || !ticketQuantity || !price) {
      res.status(404).json({ message: "all fields are required" });
    }

    const newTicketPurchase = new TicketPurchases({
      selectionType,
      ticketQuantity,
      price,
    });

    await newTicketPurchase.save();

    return res.status(200).json({ message: "ticket purchase success" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "failed to purchase tickets", error: error.message });
  }
};

exports.showAllTickets = async (req, res) => {
  try {
    const tickets = await TicketPurchases.find({});
    return res
      .status(200)
      .json({ status: 200, message: "all tickets", data: tickets });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "failed to purchase tickets", error: error.message });
  }
};
