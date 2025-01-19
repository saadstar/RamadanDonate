const express = require("express");
const router = express.Router();
const {
  register,
  login, 
} = require("../controllers/authController");

// @POST create new account
router.post("/register", register);

// @POST login to your account
router.post("/login", login);

module.exports = router;