const express = require("express");
const router = express.Router();
const {createNeeder, getAllNeeder, deleteNeeder } = require("../controllers/neederController");

// POST
router.post("/create", createNeeder);

//    url /getAll/albahren
router.get("/getAll/:company/:year", getAllNeeder);

router.delete("/delete/:id", deleteNeeder);

module.exports = router;
