const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

const checkAdmin = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // verify the token
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          return null;
        }
        return decoded;
      }
    );
    if (!decodedToken) {
      return res.status(401).json({ status: 401, message: "invalid token" });
    }

    // find user from the decoded token
    const user = await Admin.findOne({ email: decodedToken.email });
    const useFound = await Admin.find({ email: decodedToken.email });
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: "no user found with this token" });
    }
    req.user = user;

    next();
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server error" });
  }
};

module.exports = checkAdmin;
