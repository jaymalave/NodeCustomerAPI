const express = require("express");
const router = express.Router();

// @route POST /insert
// @desc insert new user to the database
// @access Private
router.post("/", (req, res) => {
  res.write("insert a user");
  res.end();
});

module.exports = router;