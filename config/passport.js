const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = function (passport) {
  passport.use(User.createStrategy());

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    console.log("deserializing");
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
