const express = require("express");
const router = express.Router();

// @route PUT /update
// @desc update details of a specific user
// @access Private
router.put("/", (req, res) => {
  res.write("update user");
  res.end();
});

module.exports = router;