const { connect } = require("http2");
const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (error) {
    console.log("Error connecting to Mongo DB", error.message);
  }
};

module.exports = connectToMongoDB;
