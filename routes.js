const express = require("express");
const users = require("./routes/users");
const items = require("./routes/items");
const auth = require("./routes/auth");
const transactions = require("./routes/transactions");
const serverRouter = express.Router();

module.exports = function (app, passport) {
  // serverRouter.use("/users", users);
  serverRouter.use("/items", items);
  serverRouter.use(
    "/auth",
    function (req, res, next) {
      req.passport = passport;
      next();
    },
    auth
  );
  serverRouter.use("/transactions", transactions);
  serverRouter.use("/users", users);
  app.use("/server", serverRouter);
};
