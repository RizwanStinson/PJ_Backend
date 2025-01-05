const express = require("express");
const {
    joinAttendeeList, getAllAttendee, sendMailToAttendee
} = require("../controllers/attendee.controller");

const router = express.Router();

router.route("/join").post(joinAttendeeList);
router.route("/").get(getAllAttendee);
router.route("/send").post(sendMailToAttendee);

module.exports = router;
