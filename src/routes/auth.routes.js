const express = require("express");
const { login } = require("../controllers/auth.controller");
const { createAdmin } = require("../controllers/admin.controller");

const router = express.Router();

router.route("/signup").post(createAdmin);
router.route("/login").post(login);

module.exports = router;
