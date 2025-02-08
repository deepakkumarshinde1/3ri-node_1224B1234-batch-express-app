var express = require("express");
var router = express.Router();
const IndexController = require("../controller/index.controller");

/* GET home page. */
router.get("/", IndexController.home);

router.get("/dashboard", IndexController.dashboard);

// post ==> body
router.post("/check-login", IndexController.checkLogin);

module.exports = router;
