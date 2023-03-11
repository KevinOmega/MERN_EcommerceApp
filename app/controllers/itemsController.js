const mongoose = require("mongoose");
const Item = mongoose.model("Item");

exports.getItems = function (req, res) {
  Item.find({}, (err, foundItems) => {
    if (!err) {
      res.json(foundItems);
    } else {
      res.json(err);
      console.log(err);
    }
  });
};

exports.getItemById = function (req, res) {
  Item.findById(req.params.itemId, (err, itemFound) => {
    if (!err) {
      res.json(itemFound);
    } else {
      res.json(err);
    }
  });
};

exports.getItemByName = function (req, res) {
  const value = req.params.name;
  const regularExpression = new RegExp(`${value}`, "i");
  Item.find({ name: regularExpression }, function (err, foundItems) {
    if (!err) {
      res.json(foundItems);
    } else {
      res.json({ err });
    }
  });
};

exports.getItemsByFilters = function (req, res) {
  const { categories, min, max } = req.params;
  console.log(categories);

  Item.find({}, (err, foundItems) => {
    if (!err) {
      res.json(
        foundItems.filter(
          (item) =>
            categories.includes(item.type) &&
            item.price >= Number(min) &&
            item.price <= Number(max)
        )
      );
    } else {
      res.json(err);
    }
  });
};
