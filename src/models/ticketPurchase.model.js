const { default: mongoose } = require("mongoose");

const ticketPurchaseSchema = new mongoose.Schema({
  selectionType: {
    type: mongoose.Types.ObjectId,
    ref: "DanceClass",
  },
  ticketQuantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const TicketPurchases = mongoose.model("TicketPurchases", ticketPurchaseSchema);

module.exports = TicketPurchases;
