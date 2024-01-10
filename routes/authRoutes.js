const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authControllers");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

module.exports = router;
