require("dotenv").config();
const express = require("express");

const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes.js");

const connectToMongoDB = require("./db/connectToMongoDB");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log("Server is running on PORT " + process.env.PORT);
});
