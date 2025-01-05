const express = require('express')
const { payment } = require('../controllers/payment.controller')
const router = express.Router()

// Define the payment route
router.post('/payment-intent', payment)

// Correct module export
module.exports = router
