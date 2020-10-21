let User = require("../models/User");

exports.create = (req, res) => {
  const user = new User({ login: req.body.login, password: req.body.password });
  user.save((err) => {
    if (err) {
      console.warn("Error creating user");
    }
    res.send(`Register successful: ${user}`);
  });
};

exports.read = (req, res) => {
  // res.send(req.params.id);
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.warn(`Error reading user ${user}`);
    }
    res.send(`Showing user: ${user}`);
  });
};
