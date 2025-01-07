const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const { emailTemp } = require("../templates/emailTemp");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendMail = async (toEmail, sub, body) => {
  try {
    const mail = await transporter.sendMail({
      to: toEmail,
      subject: sub,
      html: body,
    });
  } catch (error) {
    console.log(error.message);
  }
};
