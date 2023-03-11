const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.session.passport.user);
  } else {
    console.log("not authenticated");
    res.json("0");
  }
});

router.post("/register", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err) {
      if (!err) {
        req.passport.authenticate("local")(req, res, function (err) {
          res.json({ name: "success" });
        });
      } else {
        console.log(err);
        res.json(err);
      }
    }
  );
});

router.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      req.passport.authenticate("local")(req, res, function () {
        res.json({ response: "success" });
      });
    }
  });
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json({ response: "success" });
    }
  });
});

module.exports = router;
