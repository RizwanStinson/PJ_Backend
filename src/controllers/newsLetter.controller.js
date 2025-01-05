const NewsLetter = require("../models/newsLetter.model");
const { emailTemp } = require("../templates/emailTemp");
const { sendMail } = require("../utils/sendMail");

// @desc:  send newsletter mail o the users
// @route: POST /newsletter/
// exports.joinNewsLetter = async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log(email);

//     if (!email) {
//       return res.status(400).json({
//         status: 400,
//         message: "email is required",
//       });
//     }

//     // find the newsletter document
//     let newsletter = await NewsLetter.findOne({ email });

//     // If no document exists, create a new one
//     if (!newsletter) {
//       newsletter = new NewsLetter({
//         email: [email],
//       });
//     } else {
//       // Check if the email already exists in the array
//       if (newsletter.email.includes(email)) {
//         return res.status(400).json({
//           status: 400,
//           message: "email is already subscribed",
//         });
//       }

//       // Add the email to the array
//       newsletter.email.push(email);
//     }

//     // Save the updated newsletter document
//     await newsletter.save();

//     return res.status(200).json({
//       status: 200,
//       message: "successfully subscribed to the newsletter",
//       data: newsletter,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       staus: 500,
//       message: "server error",
//     });
//   }
// };
// @desc: Add email to the newsletter
// @route: POST /newsletter/join
exports.joinNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);

    // Validate email presence
    if (!email) {
      return res.status(400).json({
        status: 400,
        message: "email is required",
      });
    }

    let newsletter = await NewsLetter.findOne({ email });
    if (newsletter) {
      return res.status(400).json({
        status: 400,
        messgae: "already subscribed",
      });
    }

    let subscribe = await NewsLetter.create({ email });
    return res.status(200).json({
      status: 200,
      message: "Successfully subscribed to the newsletter",
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
exports.getAllSubscribedUsers = async (req, res) => {
  try {
    const users = await NewsLetter.find({});
    return res.send(users);
  } catch (error) {}
};

// @desc:  send newsletter mail o the users
// @route: POST /newsletter/
exports.sendNewsLetter = async (req, res) => {
  try {
    const { sub, body } = req.body;
    const subscibedUsers = await NewsLetter.find({});
    const emails = subscibedUsers.map((user) => user.email);
    const emailString = emails.join(", ");
    sendMail(emailString, sub, body);
    res.send("Email sent");
  } catch (error) {}
};
