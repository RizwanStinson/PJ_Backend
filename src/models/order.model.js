const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
  ticket: {
    type: mongoose.Types.ObjectId,
    ref: "TicketPurchases",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
