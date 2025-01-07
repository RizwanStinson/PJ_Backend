const { default: mongoose } = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  eventId: {
    type: mongoose.Types.ObjectId,
    ref: "DanceClass",
  },
  orderId: {
    type: mongoose.Types.ObjectId,
    ref: "Order",
  },
});

const Attendee = mongoose.model("Attendee", attendeeSchema);

module.exports = Attendee;
