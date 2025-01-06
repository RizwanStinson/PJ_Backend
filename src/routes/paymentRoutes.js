const express = require('express')
const {paypalPayment, stripePayment} = require('../controllers/payment.controller.js')
const router = express.Router()

// Define the payment route
router.post('/payment-paypal', paypalPayment);

router.post('/payment-stripe', stripePayment);

// Correct module export
module.exports = router;
