const Attendee = require("../models/attendees.model");
const { emailTemp } = require("../templates/emailTemp");
const { sendMail } = require("../utils/sendMail");


exports.joinAttendeeList = async (req, res) => {
  try {
    const { email, contact } = req.body;
    console.log(email);

    // Validate email presence
    if (!email) {
      return res.status(400).json({
        status: 400,
        message: "email is required",
      });
    }

    let subscribe = await Attendee.create({ email, contact });
    return res.status(200).json({
      status: 200,
      message: "You're attending the event",
      data: subscribe,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Server error",
    });
  }
};

// get all subscription
exports.getAllAttendee = async (req, res) => {
  try {
    const users = await Attendee.find({});
    return res.send(users);
  } catch (error) {}
};


exports.sendMailToAttendee = async (req, res) => {
  try {
    const { sub, body } = req.body;
    const subscibedUsers = await Attendee.find({}, "email");
    const emails = subscibedUsers.map((user) => user.email);
    const emailString = emails.join(", ");
    sendMail(emailString, sub, body);
    res.send("Email sent");
  } catch (error) {}
};
