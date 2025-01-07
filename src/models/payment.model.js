const { default: mongoose } = require("mongoose");

const paymentSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "Ticket",
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
