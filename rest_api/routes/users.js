const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("hey its userRoute");
});

module.exports = router;
