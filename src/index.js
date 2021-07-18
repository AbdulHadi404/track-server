require("./models/User");
require("./models/internship");
require("./models/news");
require("./models/rfid");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const internshiproute = require("./routes/internshipRoute");
const newroute = require("./routes/newsRoutes");
const requireAuth = require("./middlewares/requireAuth");
const RfidRoutes = require("./routes/RfidRoutes");

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);
app.use(internshiproute);
app.use(newroute);
app.use(RfidRoutes);

const mongoUri =
  "mongodb+srv://admin:[]assword@cluster0.w2yj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  console.log(year + "-" + month + "-" + date);
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
