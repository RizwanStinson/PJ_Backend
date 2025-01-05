const { default: mongoose } = require("mongoose");

const billingInfoSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  ticketPurchase: {
    type: mongoose.Types.ObjectId,
    ref: "TicketPurchase",
  },
});

const Billing = mongoose.model("Billing", billingInfoSchema);

module.exports = Billing;
