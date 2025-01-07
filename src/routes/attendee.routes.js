const express = require("express");
const {
  joinAttendeeList,
  getAllAttendee,
  sendMailToAttendee,
} = require("../controllers/attendee.controller");
const checkAdmin = require("../middlewares/protect");

const router = express.Router();

router.route("/join").post(joinAttendeeList);
// admin routes
router.route("/").get(checkAdmin, getAllAttendee);
router.route("/send").post(checkAdmin, sendMailToAttendee);

module.exports = router;
