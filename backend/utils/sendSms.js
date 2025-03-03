require("dotenv").config();
const twilio = require("twilio");

const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSMS = async (message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.YOUR_PHONE_NUMBER,
    });
    console.log("SMS sent successfully!");
  } catch (error) {
    console.error("Error sending SMS:", error.message);
  }
};

module.exports = sendSMS;
