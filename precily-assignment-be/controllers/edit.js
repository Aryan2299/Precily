const Component = require("../models/component");

//send component details on get request
exports.getEditComponent = (req, res, next) => {
  Component.find().then((components) => res.send(components));
};
