const { default: mongoose } = require("mongoose");

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
  },
});

const NewsLetter = mongoose.model("NewsLetter", newsLetterSchema);

module.exports = NewsLetter;
