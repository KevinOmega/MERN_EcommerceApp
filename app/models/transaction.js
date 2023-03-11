const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  itemID: {
    type: String,
    requried: true,
  },
  date : Date,
});

mongoose.model("Transaction", transactionSchema);
