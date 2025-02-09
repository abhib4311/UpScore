const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },  // User name
    phone: { 
      type: String, 
      required: true, 
      unique: true, 
      validate: {
        validator: function(v) {
          return /\+?\d{1,4}?[ ]?(\(?\d{1,4}?\)?)[ ]?[\d\s\-]{7,15}/.test(v);  // Basic phone number validation
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },  // User phone number
    isVerified: { type: Boolean, default: false },  // OTP verification status
    plan: { 
      type: String, 
      enum: ["free", "golden", "platinum"], 
      default: "free" 
    },  // User plan
    helper: {
      helperId: { type: mongoose.Schema.Types.ObjectId, ref: "Helper" },  // Ref to helper
      assignedDate: Date,
      expiryDate: Date,
    },
    documents: {
      loanDetails: { type: String, default: "" },  // URL to uploaded loan document
      accountDetails: { type: String, default: "" },  // URL to uploaded account document
      reportGenerated: { type: String, default: "" },  // URL to the generated report
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
  
// {  This is the user model. It defines the structure of the user document in the database. 
//   The user document will have the following fields: 
  
//   name: User name 
//   phone: User phone number 
//   isVerified: OTP verification status 
//   plan: User plan 
//   helper: Ref to helper 
//   documents: URLs to uploaded documents 
  
//   The user model is exported as a mongoose model. 
//   3. Create the Helper Model 
//   Create a new file named  helperModel.js  in the  models  folder and add the following code:}