const jwt = require("jsonwebtoken");

// generate JWT token
exports.signToken = async (email) => {
  try {
    return jwt.sign({ email }, "abcdefgjkhgrukegh32454564the45g5");
  } catch (error) {
    console.log(error.message);
  }
};
