let User = require("../models/User");

exports.create = (req, res) => {
  const user = new User({ login: req.body.login, password: req.body.password });
  user.save((err) => {
    if (err) {
      console.log("Error creating user");
    }
    res.send(`Register successful: ${user}`);
  });
};
