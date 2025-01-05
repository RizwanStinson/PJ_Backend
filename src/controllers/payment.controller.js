const Stripe = require('stripe')
const dotenv = require('dotenv')

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

exports. payment = async (req,res)=>{
    const { amount, currency } = req.body

    if( !amount || !currency) {
        res.status(404).json({ message: "Amount and currency are required!"})
        return;
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
          // Fix typo here
          amount,
          currency,
        })
        res
          .status(200)
          .json({
            message: 'Payment Successful!',
            paymentIntent: paymentIntent.id, 
          })
    } catch (error) {
        res.status(400).json({ message: "Fail to payment!",
            error: error.message,
        })
    }
}

