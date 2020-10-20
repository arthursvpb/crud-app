let User = require("../models/User");

exports.users = (req, res) => {
  res.send("Olá do controller USERS!");
};

exports.test = (req, res) => {
  res.send("Olá de TESTE!");
};
