const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  fullName: String,
  cardNumber: String,
  expiry: String,
  cvv: String,
});

module.exports = mongoose.model('Payment', paymentSchema);
