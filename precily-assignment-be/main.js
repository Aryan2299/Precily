const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Component = require("./models/component");

const app = express();

const MONGODB_URI =
  "mongodb+srv://aryan1939:admin@cluster0.rp7ef.mongodb.net/test";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//allow all CORS
app.use(cors());

//route for udpating data
const editRoutes = require("./routes/edit");
//route for returning number of times user has called
// add and update for a component
const countRoutes = require("./routes/count");

//receive data and update schema
app.post("/", (req, res, next) => {
  const compHeading = req.body.heading;
  const compBody = req.body.body;
  const compCount = req.body.count;

  Component.findById(req.body._id)
    .then((component) => {
      component.heading = compHeading;
      component.body = compBody;
      component.count += 1;

      return component.save();
    })
    .then(() => console.log("Component added"))
    .catch((err) => console.log(err));
  next();
});

app.use("/edit", editRoutes);
app.use("/count", countRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
