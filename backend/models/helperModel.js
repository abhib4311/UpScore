const mongoose = require("mongoose");

const helperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  expertise: { type: String, required: true },
  assignedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Helper", helperSchema);
