require("dotenv").config();
const express = require("express");

const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes.js");
const cors = require("cors");
const connectToMongoDB = require("./db/connectToMongoDB");
const cookieParser = require("cookie-parser");

const { app, server } = require("./socket/socket.js");

const corsOptions = {
  origin: "https://gup-shup-eight.vercel.app", // your frontend URL
  credentials: true, // this allows the server to accept cookies from the client
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log("Server is running on PORT " + process.env.PORT);
});
