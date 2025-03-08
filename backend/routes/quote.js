const express = require("express");
const sendSMS = require("../utils/sendSms"); // Import SMS function

const router = express.Router();

router.post("/submit-quote", async (req, res) => {
  try {
    const { name, phone, service, otherDetails } = req.body;

    // Validate required fields
    if (!name || !phone || !service) {
      return res.status(400).json({ error: "Name, phone, and service are required" });
    }

    // Validate phone number (10-15 digits, allows international format)
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: "Invalid phone number format" });
    }

    // Include 'otherDetails' only if 'Others' is selected
    const serviceMessage = service === "Others" ? `Service: ${otherDetails}` : `Service: ${service}`;

    const smsMessage = `New Quote Request:
    Name: ${name}
    Phone: ${phone}
    ${serviceMessage}`;

    await sendSMS(smsMessage); // Send SMS notification

    console.log("Quote request received:", { name, phone, service, otherDetails });

    res.status(200).json({ success: "Quote request submitted successfully!" });
  } catch (error) {
    console.error("Error submitting quote:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
