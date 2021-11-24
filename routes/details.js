const express = require("express");
const router = express.Router();

// @route GET /details
// @desc fetch details of a specific user
// @access Public
router.get("/", (req, res) => {
  res.write("User details");
  res.end();
});

module.exports = router;
