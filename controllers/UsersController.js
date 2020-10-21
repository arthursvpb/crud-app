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
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.warn(`Error reading user ${user}`);
    }
    res.send(`Showing user: ${user}`);
  });
};

exports.update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) console.warn("Error updating user");
    res.send(`Updated successfully ${user}`);
  });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) console.warn("Error deleting user");
    res.send(`Deleted successfully ${user}`);
  });
};
