const mongoose = require("mongoose");

exports.dbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected....!");
  } catch (error) {
    console.log("db error:", error.message);
  }
};
