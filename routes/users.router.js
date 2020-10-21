const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");

router.post("/create", UsersController.create);
router.get("/read/:id", UsersController.read);
// router.get("/test", UsersController.test);

module.exports = router;
