const mongoose = require("mongoose");
const Transaction = mongoose.model("Transaction");
const User = mongoose.model("User");
const Item = mongoose.model("Item");

exports.completeTransaction = function (req, res) {
  const items = req.body.items;
  const userID = req.session.passport.user;

  items.forEach((item) => {
    for (let index = 0; index < item.amount; index++) {
      const newTransaction = new Transaction({
        userID,
        itemID: item._id,
        date: new Date(),
      });

      newTransaction.save();
    }
    Item.findById(item._id, (err, foundItem) => {
      foundItem.stock -= item.amount;
      foundItem.save();
    });
  });

  User.findByIdAndUpdate(
    userID,
    { $set: { cart: [] } },
    function (err, foundUser) {
      if (!err) {
        res.json(items);
      } else {
        res.json(err);
      }
    }
  );
};
