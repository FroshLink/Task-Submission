var express = require("express");
var router = express.Router();

const { signup, signin, showdata } = require("../controllers/auth.js");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/showdata", showdata);
module.exports = router;
