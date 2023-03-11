const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const session = require("express-session");
const join = require("path").join;
const cors = require("cors");

module.exports = function (app, passport) {
  const models = join(__dirname, "../app/models");

  fs.readdirSync(models)
    .filter((file) => ~file.search(/^[^.].*\.js$/))
    .forEach((file) => require(join(models, file)));

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
