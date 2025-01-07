const Admin = require("../models/admin.model");

exports.createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.create({ email, password });

    return res
      .status(201)
      .json({ status: 201, message: "admin created", data: admin });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server error" });
  }
};
