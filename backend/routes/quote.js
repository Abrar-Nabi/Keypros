const express = require("express");
const sendSMS = require("../utils/sendSms"); // Import SMS function

const router = express.Router();

router.post("/submit-quote", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const smsMessage = `New Quote Request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    await sendSMS(smsMessage); // Send SMS notification

    res.status(200).json({ success: "Quote request submitted successfully!" });
  } catch (error) {
    console.error("Error submitting quote:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
