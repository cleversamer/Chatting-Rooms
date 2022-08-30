const { Router } = require("express");
const router = Router();
const { roomsController } = require("../controllers");
const auth = require("../middleware/auth");

router.get("/", roomsController.getAllRomms);

module.exports = router;
