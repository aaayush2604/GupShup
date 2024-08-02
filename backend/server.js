require("dotenv").config();
const express = require("express");

const path = require("path");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

const userRoutes = require("./routes/userRoutes.js");
const cors = require("cors");
const connectToMongoDB = require("./db/connectToMongoDB");
const cookieParser = require("cookie-parser");

const { app, server } = require("./socket/socket.js");

const dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(dirname, "frontend", "dist", "index.html"));
});

server.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log("Server is running on PORT " + process.env.PORT);
});
