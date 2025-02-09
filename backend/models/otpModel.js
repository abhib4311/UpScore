const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  otp: { type: String, required: true },
  otpExpires: { type: Date, required: true, index: { expires: "5m" } }, // Auto-delete after 5 mins
});

module.exports = mongoose.model("OTP", otpSchema);
