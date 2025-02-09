require("dotenv").config();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

// Your phone number
const phoneNumber = "+918887953928";

// Generate a random 6-digit OTP
const otp = Math.floor(100000 + Math.random() * 900000);
console.log(`🔹 Generated OTP: ${otp}`);

async function sendOTP() {
  try {
    const message = await client.messages.create({
      body: `Your OTP code is: ${otp}`,
      from: twilioPhone,
      to: phoneNumber,
    });

    console.log(`✅ OTP Sent Successfully! Message SID: ${message.sid}`);
  } catch (error) {
    console.error(`❌ Error Sending OTP: ${error.message}`);
  }
}

// Call the function to send OTP
sendOTP();
