const jwt = require("jsonwebtoken");

// generate JWT token
exports.signToken = async (email) => {
  try {
    return jwt.sign({ email }, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error.message);
  }
};
