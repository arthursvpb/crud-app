// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Routes
const users = require("./routes/users.router");

// Starting express
const app = express();

// Connect to DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crud-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error -"));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// First route
app.use("/users", users);

// Server
const port = 3333;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
