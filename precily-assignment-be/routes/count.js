const express = require("express");
const router = express.Router();
const Component = require("../models/component");

//return count on post request
router.post("/", (req, res, next) => {
  Component.find({ number: req.body.number })
    .then((component) => res.send(component))
    .catch((err) => console.log(err));
});

module.exports = router;
