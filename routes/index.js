const express = require("express");
const router = express.Router();

/* GET root page. */
router.get("/", (req, res, next) => {
  res.json({ response: "root GET method" });
});

module.exports = router;
