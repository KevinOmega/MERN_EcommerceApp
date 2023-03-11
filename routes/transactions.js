const express = require("express");
const router = express.Router({ mergeParams: true });
const transactions = require("../app/controllers/transactionsController");

router.post("/", (req, res) => {
  transactions.completeTransaction(req, res);
});

module.exports = router;
