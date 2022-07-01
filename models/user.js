const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    created_at: { 
      type: Date
   },
    
  },
  { timestamp: true }
);


//exporting module
module.exports = mongoose.model("User", userSchema);
