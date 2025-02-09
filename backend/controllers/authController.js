const User = require("../models/userModel");
const OTP = require("../models/otpModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const twilio = require("twilio");

// Twilio & JWT Config
const { TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, JWT_SECRET } = process.env;
const twilioClient = new twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

// Helper function to generate JWT token
const generateToken = (userId, phone) => jwt.sign({ userId, phone }, JWT_SECRET, { expiresIn: "1d" });

// ✅ Send OTP to the user
exports.sendOTP = async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!phone) return res.status(400).json({ success: false, message: "Phone number is required" });

    let user = await User.findOne({ phone });
    if (!user) {
      if (!name) return res.status(400).json({ success: false, message: "Name is required for new users" });
      user = await User.create({ name, phone });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOTP = await bcrypt.hash(otp, 10);
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

    await OTP.findOneAndUpdate(
      { userId: user._id },
      { otp: hashedOTP, otpExpires },
      { upsert: true, new: true }
    );

    await twilioClient.messages.create({
      body: `Your OTP is ${otp}. It will expire in 5 minutes.`,
      from: TWILIO_PHONE_NUMBER,
      to: phone,
    });

    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ success: false, message: "Error sending OTP", error: error.message });
  }
};

// ✅ Verify OTP and authenticate user
exports.verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) return res.status(400).json({ success: false, message: "Phone and OTP are required" });

    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const otpRecord = await OTP.findOne({ userId: user._id });
    if (!otpRecord) return res.status(400).json({ success: false, message: "OTP not found or expired" });

    if (new Date() > otpRecord.otpExpires) {
      await OTP.deleteOne({ _id: otpRecord._id });
      return res.status(400).json({ success: false, message: "OTP has expired" });
    }

    const isMatch = await bcrypt.compare(otp, otpRecord.otp);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid OTP" });

    user.isVerified = true;
    await user.save();
    await OTP.deleteOne({ _id: otpRecord._id });

    const token = generateToken(user._id, user.phone);

    res.status(200).json({
      success: true,
      message: "OTP Verified",
      token,
      user: { id: user._id, phone: user.phone, isVerified: user.isVerified },
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, message: "Error verifying OTP", error: error.message });
  }
};
