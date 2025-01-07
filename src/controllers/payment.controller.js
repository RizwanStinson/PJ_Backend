const Stripe = require("stripe");
const dotenv = require("dotenv");
const Order = require("../models/order.model");
const NewsLetter = require("../models/newsLetter.model");
const Attendee = require("../models/attendees.model");
const Ticket = require("../models/ticket.model");

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const stripePayment = async (req, res) => {
  try {
    const { amount, currency, ticketId } = req.body;

    if (!amount || !currency) {
      return res
        .status(404)
        .json({ message: "amount and currency are required!" });
    }

    const ticket = await Ticket.findById({ _id: ticketId });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    // add email to the newsletter
    const newsLetter = await NewsLetter.findOne({ email: ticket.email });
    if (newsLetter) {
      console.log("user already subscribed newsletter");
    } else {
      await NewsLetter.create({ email: ticket.email });
    }

    return res.status(200).json({
      message: "payment successful",
      paymentIntent: paymentIntent.id,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "fail to payment!", error: error.message });
  }
};

const paypalPayment = async (req, res) => {
  try {
    const { ticket, name, email, phoneNumber } = req.body;
    const orderTicket = await Order.create({
      ticket,
      name,
      email,
      phoneNumber,
    });

    // add email to the newsletter
    const newsLetter = await NewsLetter.findOne({ email: email });
    if (newsLetter) {
      console.log("user already subscribed newsletter");
    } else {
      await NewsLetter.create({ email });
      await Attendee.create({});
    }

    return res.status(201).json({
      status: 201,
      message: "payment successful",
      data: orderTicket,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "payment unsuccessful",
    });
  }
};

module.exports = { paypalPayment, stripePayment };
