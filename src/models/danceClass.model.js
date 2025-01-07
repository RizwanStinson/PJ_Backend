const { default: mongoose } = require("mongoose");

const danceClassSchema = new mongoose.Schema({
  classType: {
    type: String,
    enum: ["NYC/NJ Group", "Private", "Online"],
    required: true,
  },
  classDate: {
    type: Date,
    required: true,
  },
  timeFrom: {
    type: Date,
    required: true,
  },
  timeTo: {
    type: Date,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  ticketQuantity: {
    type: Number,
    required: true,
  },
});

const DanceClass = mongoose.model("DanceClass", danceClassSchema);

module.exports = DanceClass;
