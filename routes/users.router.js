const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");

router.get("/", UsersController.users);
router.get("/test", UsersController.test);

module.exports = router;
