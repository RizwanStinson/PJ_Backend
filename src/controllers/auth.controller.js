const { signToken } = require("../utils/signToken");

// @desc:  login user
// @route: POST /auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== "admin" || password !== "admin") {
      console.log("inside if", email, password);
      return res.status(400).json({
        staus: 400,
        message: "incorrect email and password",
      });
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
