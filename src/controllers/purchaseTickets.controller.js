const Order = require("../models/order.model");
const TicketPurchases = require("../models/ticketPurchase.model");
const mongoose = require("mongoose");

exports.purchaseTickets = async (req, res) => {
  try {
    const { classId, ticketQuantity, price } = req.body;
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
    const { id } = req.params;
    const purchaseTicketData = [];
    const tickets = await TicketPurchases.find({ selectionType: id });
    console.log(tickets);

    // for (let i = 0; i < tickets.length; i++) {

    //   const order = await Order.find({ _id: ._id });
    //   console.log(order);
    //   purchaseTicketData.push(order);
    //   console.log(purchaseTicketData);
    // }

    return res
      .status(200)
      .json({ status: 200, message: "all tickets", data: purchaseTicketData });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "failed to purchase tickets", error: error.message });
  }
};
