const { Message } = require("@models");
const messageService = require("./message.services");

const storeUserMessages = {
  Mutation: {
    storeMessages: async (
      _,
      { senderId, recipientId, chatId, message, dateTime }
    ) => {
      try {
        const insertedMessage = await messageService.createMessage({
          senderId,
          recipientId,
          chatId,
          message,
          dateTime,
        });
        if (insertedMessage) {
          return {
            success: true,
            message: "Message inserted successfully",
            insertedMessage,
          };
        } else {
          return {
            success: false,
            message: "Failed to insert message",
            insertedMessage: null,
          };
        }
      } catch (err) {
        console.error("Error inserting message:", err);
        throw new Error(`Failed to insert message: ${err.message}`);
      }
    },
  },
};

module.exports = storeUserMessages;