var express = require("express");
var router = express.Router();
const users = require("../app/controllers/usersControllers");

/* GET users listing. */

router.get("/cart", function (req, res) {
  users.getCart(req, res);
});

router.post("/cart", function (req, res) {
  users.AddToCart(req, res);
});

router.patch("/cart", function (req, res) {
  users.setAmoutOfAnItem(req, res);
});

router.delete("/cart", function (req, res) {
  users.deleteItem(req, res);
});

module.exports = router;
