const Ticket = require("../models/ticket.model");

const buyTicket = async (req, res) => {
  try {
    const { classId, fullName, email, phoneNumber, ticketQuantity } = req.body;

    const ticket = await Ticket.create({
      classId,
      fullName,
      email,
      phoneNumber,
      ticketQuantity,
    });

    return res.status(201).json({
      status: 201,
      message: "ticket purchase complete",
      data: ticket,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "server error", data: error.message });
  }
};

module.exports = buyTicket;
