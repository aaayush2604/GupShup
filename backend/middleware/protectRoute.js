const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.json(401).json({ error: "Unauthorized- No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.json(401).json({ error: "Unauthorized- Token Invalid" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in ProtectRoute Function " + error.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

module.exports = protectRoute;
