const express = require("express");
const router = express.Router({ mergeParams: true });
const items = require("../app/controllers/itemsController");

router.get("/", (req, res) => {
  items.getItems(req, res);
});

router.get("/itemId/:itemId", (req, res) => {
  items.getItemById(req, res);
});

router.get("/itemName/:name", (req, res) => {
  items.getItemByName(req, res);
});

router.get("/filters/:categories&:min&:max", (req, res) => {
  items.getItemsByFilters(req, res);
});

module.exports = router;
