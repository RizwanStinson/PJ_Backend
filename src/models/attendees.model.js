const { default: mongoose } = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  contact: {
    type: Number,
    unique: true,
  },
});

const Attendee = mongoose.model("Attendee", attendeeSchema);

module.exports = Attendee;
