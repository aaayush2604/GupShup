const express = require("express");
const router = express.Router();

const { getUsersforSideBar } = require("../controllers/userControllers.js");

const protectRoute = require("../middleware/protectRoute.js");

router.get("/", protectRoute, getUsersforSideBar);

module.exports = router;
