const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json({ response: "Mock users response" });
});

module.exports = router;
