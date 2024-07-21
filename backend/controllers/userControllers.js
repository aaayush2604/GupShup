const User = require("../models/userModel");

const getUsersforSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } });
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersforSidebar Controller", error.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUsersforSideBar };
