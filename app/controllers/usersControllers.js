const mongoose = require("mongoose");
const User = mongoose.model("User");
const Item = mongoose.model("Item");

exports.AddToCart = function (req, res) {
  Item.findById(req.body.itemID, function (err, itemFound) {
    User.findById(req.session.passport.user, function (err, userFound) {
      if (!err) {
        const { _id, name, price, image } = itemFound;
        userFound.cart.push({ _id, name, price, image, amount: 1 });
        userFound.save();
        res.json({ response: "success" });
      }
    });
  });
};

exports.getCart = function (req, res) {
  if (req.session.passport) {
    User.findById(req.session.passport.user, function (err, userFound) {
      if (!err) {
        res.json(userFound.cart);
      }
    });
  } else {
    res.json([]);
  }
};

exports.setAmoutOfAnItem = function (req, res) {
  const itemIndex = req.body.itemIndex;
  const itemAmount = req.body.itemAmount;

  User.findById(req.session.passport.user, function (err, userFound) {
    if (!err) {
      userFound.cart[itemIndex] = {
        ...userFound.cart[itemIndex],
        amount: itemAmount,
      };
      userFound.save();
      res.json({ response: "success" });
    } else {
      console.log(err);
    }
  });
};

exports.deleteItem = function (req, res) {
  const itemID = req.body.itemID;
  User.findByIdAndUpdate(
    req.session.passport.user,
    {
      $pull: { cart: { _id: mongoose.mongo.ObjectId(itemID) } },
    },
    function (err) {
      if (!err) {
        res.json({ response: "success" });
      } else {
        res.json(err);
      }
    }
  );
};
