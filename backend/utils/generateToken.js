const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //should be in ms format
    httpOnly: true, //prevent XSS attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "deployment",
  });
};

module.exports = generateTokenAndSetCookie;
