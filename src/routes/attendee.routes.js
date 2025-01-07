const express = require("express");
const {
  joinAttendeeList,
  getAllAttendee,
  sendMailToAttendee,
  getAllSimilarClasses,
} = require("../controllers/attendee.controller");
const checkAdmin = require("../middlewares/protect");

const router = express.Router();

router.route("/join").post(joinAttendeeList);
// admin routes
router.route("/").get(checkAdmin, getAllAttendee);
router.route("/send").post(checkAdmin, sendMailToAttendee);

router.route("/getsimilarClass").post( getAllSimilarClasses);

module.exports = router;
