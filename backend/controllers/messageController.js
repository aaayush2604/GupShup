const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel");

const sendMessage = async (req, res) => {
  try {
    const { msg } = req.body;
    console.log(msg);
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

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in Get Message Controller " + error.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

module.exports = { sendMessage, getMessage };
