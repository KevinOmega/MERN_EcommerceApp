var express = require("express");
const passport = require("passport");

var app = express();

require("./config/express")(app, passport);
require("./config/mongodb")();
require("./config/passport")(passport)
require("./routes")(app, passport);

module.exports = app;
