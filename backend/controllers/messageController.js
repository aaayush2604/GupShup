const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req, res) => {
  try {
    const { msg } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message: msg,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //this will allow both of them to run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //io.to(receiverSocketId).emit() is used to send message to a specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    console.log("New Message: ", newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in Send Message Controller " + error.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    console.log(senderId, userToChatId);

    const conversation = await Conversation.findOne({
      participants: { $all: [userToChatId, senderId] },
    }).populate("messages");

    if (!conversation) return res.status(201).json([]);

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in Get Message Controller " + error.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

module.exports = { sendMessage, getMessage };
