const { default: mongoose } = require("mongoose");

const ticketSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "DanceClass",
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  ticketQuantity: {
    type: Number,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
