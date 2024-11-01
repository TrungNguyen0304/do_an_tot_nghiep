const express = require("express");
const router = express.Router();
const { register } = require("../controller/user.js"); // Kiểm tra đường dẫn

router.post("/register", register);

module.exports = router;