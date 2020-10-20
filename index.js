const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/users.router");

const port = 3333;
const app = express();

app.use("/users", users);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
