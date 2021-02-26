const express = require("express");
const router = express.Router();
const Component = require("../models/component");

router.get("/", (req, res, next) => {
  Component.find().then((components) => res.send(components));
});

module.exports = router;
