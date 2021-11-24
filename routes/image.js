const express = require("express");
const router = express.Router();

// @route GET /image
// @desc fetch image of a specific user
// @access public
router.get("/", (req, res) => {
  res.write("fetch user image");
  res.end();
});

module.exports = router;