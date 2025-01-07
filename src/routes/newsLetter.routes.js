const express = require("express");
const {
  joinNewsletter,
  getAllSubscribedUsers,
  sendNewsLetter,
} = require("../controllers/newsLetter.controller");
const checkAdmin = require("../middlewares/protect");

const router = express.Router();

router.route("/join").post(joinNewsletter);
router.route("/").get(checkAdmin, getAllSubscribedUsers);
router.route("/send").post(checkAdmin, sendNewsLetter);

module.exports = router;
