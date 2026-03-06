const { Message } = require("@models");

async function createMessage(data) {
  return await Message.create(data);
}

module.exports = {
  createMessage,
};