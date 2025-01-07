const Stripe = require("stripe");
const dotenv = require("dotenv");
const Order = require("../models/order.model");
const NewsLetter = require("../models/newsLetter.model");

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const stripePayment = async (req, res) => {
  try {
    const { amount, currency, ticket, name, email, phoneNumber } = req.body;
    console.log(email);

    const orderTicket = await Order.create({
      ticket,
      name,
      email,
      phoneNumber,
    });

    if (!amount || !currency) {
      return res
        .status(404)
        .json({ message: "amount and currency are required!" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    // add email to the newsletter
    const newsLetter = await NewsLetter.findOne({ email: email });
    if (newsLetter) {
      return res.status(400).json({
        message: "user already subscribed newsletter",
      });
    }

    await NewsLetter.create({ email });

    return res.status(200).json({
      message: "payment successful!",
      paymentIntent: paymentIntent.id,
      data: orderTicket,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "fail to payment!", error: error.message });
  }
};

const paypalPayment = async (req, res) => {
  try {
    // const url = await paypal.createOrder()

    // Save user details in the session
    // req.session.userData = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     phoneNumber: req.body.phoneNumber,
    // }

    const { ticket, name, email, phoneNumber } = req.body;
    const orderTicket = await Order.create({
      ticket,
      name,
      email,
      phoneNumber,
    });

    res.status(201).json({
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
