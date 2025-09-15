const express = require('express');
const router = express.Router();
const Payment = require('./payment'); // ✔ correct if in same folder

router.post('/submit-payment', async (req, res) => {
  try {
    const { fullName, cardNumber, expiry, cvv } = req.body;

    const newPayment = new Payment({
      fullName,
      cardNumber,
      expiry,
      cvv,
    });

    await newPayment.save();
    res.status(200).json({ message: "Payment saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save payment" });
  }
});

module.exports = router;
