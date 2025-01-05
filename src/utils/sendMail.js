const nodemailer = require("nodemailer");
const { emailTemp } = require("../templates/emailTemp");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "kmsaifullah24@gmail.com",
    pass: "oqqh mbrt doht ydvk",
  },
});

exports.sendMail = async (toEmail, sub, body) => {
  try {
    const mail = await transporter.sendMail({
      from: '"<maddison53@ethereal.email>',
      to: toEmail,
      subject: sub,
      html: emailTemp(sub, body),
    });
  } catch (error) {
    console.log(error.message);
  }
};
