// Select all form fields
const formFields = document.querySelectorAll('input, textarea');

// Add animation on focus
formFields.forEach((field) => {
  field.addEventListener('focus', () => {
    field.classList.add(
      'scale-[1.02]',
      'shadow-md',
      'transition-transform',
      'duration-300',
      'ring-2',
      'ring-[#948979]'
    );
  });

  field.addEventListener('blur', () => {
    field.classList.remove(
      'scale-[1.02]',
      'shadow-md',
      'transition-transform',
      'duration-300',
      'ring-2',
      'ring-[#948979]'
    );
  });
});

// ------------------------------------------------------------
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// ✅ 3. Contact model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// ✅ 4. POST route to save form data
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.render('contact', { success: true }); // optionally send success message
  } catch (err) {
    console.error("Contact Form Error:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;