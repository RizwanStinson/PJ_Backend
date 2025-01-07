const Ticket = require("../models/ticket.model");
const Stripe = require("stripe");
const dotenv = require("dotenv");
const NewsLetter = require("../models/newsLetter.model");
dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const buyTicket = async (req, res) => {
  try {
    const { classId, fullName, email, phoneNumber, ticketQuantity, amount, currency } = req.body;

    const newticket = await Ticket.create({
      classId,
      fullName,
      email,
      phoneNumber,
      ticketQuantity,
      amount, 
      currency
    });

    // const ticket = await Ticket.findById({ _id: ticketId });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: 'Purchase',
            },
            unit_amount: totalAmountInCents,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3001/success',
      cancel_url: 'http://localhost:3001/cancel',
    })

    const newsLetter = await NewsLetter.findOne({ email: email });
    if (newsLetter) {
      console.log("user already subscribed newsletter");
    } else {
      await NewsLetter.create({ email: email });
    }

    return res.status(201).json({
      status: 201,
      message: "Payment done",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "server error", data: error.message });
  }
};

module.exports = buyTicket;
