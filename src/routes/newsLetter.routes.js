const express = require("express");
const {
  joinNewsletter,
  getAllSubscribedUsers,
  sendNewsLetter,
} = require("../controllers/newsLetter.controller");

const router = express.Router();

router.route("/join").post(joinNewsletter);
router.route("/").get(getAllSubscribedUsers);
router.route("/send").post(sendNewsLetter);

module.exports = router;
