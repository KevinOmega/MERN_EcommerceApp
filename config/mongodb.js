const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(`mongodb+srv://KevinOmega:${process.env.MONGO_PASSWORD}@cluster0.tjmkurq.mongodb.net/ecommerceDB`);
};
