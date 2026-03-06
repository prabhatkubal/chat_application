const { Message } = require("../../../models");

async function storeMessage({ senderId, recipientId, chatId, message, dateTime }) {
  const insertedMessage = await Message.create({
    senderId,
    recipientId,
    chatId,
    message,
    dateTime,
  });

  return insertedMessage;
}

module.exports = {
  storeMessage,
};