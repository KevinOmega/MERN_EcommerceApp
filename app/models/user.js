const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const item = require("./item");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  cart: {
    type: [item.itemSchema],
  },
});

userSchema.plugin(passportLocalMongoose);

mongoose.model("User", userSchema);
