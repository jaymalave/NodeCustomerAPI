const express = require("express");
const router = express.Router();

// @route DELETE /delete
// @desc delete a user from the database
// @access public
router.delete("/", (req, res) => {
  //return delete user logic
});

module.exports = router;