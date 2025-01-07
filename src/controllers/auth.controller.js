const Admin = require("../models/admin.model");
const { signToken } = require("../utils/signToken");

// @desc:  login user
// @route: POST /auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email && email === "") || (!password && password === "")) {
      return res.status(400).json({
        staus: 400,
        message: "email and password are required",
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin.email === email && !admin.password === password) {
      return res
        .status(400)
        .json({ status: 400, message: "incorrect email and password" });
    }

    const token = await signToken(email);

    return res
      .status(200)
      .json({ status: 200, messgae: "login successful", token: token });
  } catch (error) {
    return res.status(500).json({
      staus: 500,
      message: "server error",
    });
  }
};
