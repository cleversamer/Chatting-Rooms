const { Router } = require("express");
const router = Router();
const { authController } = require("../controllers");
const auth = require("../middleware/auth");

router.get("/isauth", [auth("readOwn", "user")], authController.isAuth);

module.exports = router;
