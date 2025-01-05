const { default: mongoose } = require("mongoose");

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});

const NewsLetter = mongoose.model("NewsLetter", newsLetterSchema);

module.exports = NewsLetter;
