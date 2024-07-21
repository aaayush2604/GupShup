const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute.js");

const {
  sendMessage,
  getMessage,
} = require("../controllers/messageController.js");

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
