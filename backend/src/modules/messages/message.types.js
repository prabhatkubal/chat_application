const { gql } = require("graphql-tag");

const messageTypes = gql`
  type Message {
    messageId: ID!
    senderId: Int!
    recipientId: Int!
    chatId: String!
    message: String!
    dateTime: String!
    createdAt: String!
    updatedAt: String!
    isEdited: Boolean
    isDeleted: Boolean
  }

  extend type Query {
    getMessages(senderId: Int!, recipientId: Int!): [Message!]!
  }

  extend type Mutation {
    storeMessages(
      senderId: Int!
      recipientId: Int!
      chatId: String!
      message: String!
      dateTime: String!
    ): StoreMessageResponse!
  }

  type StoreMessageResponse {
    success: Boolean!
    message: String!
    insertedMessage: Message
  }

  extend type Mutation {
    deleteMessage(messageId: String!, chatId: String!): DeleteMessageResponse!
  }

  type DeleteMessageResponse {
    success: Boolean!
    message: String!
    status: String!
  }
`;

module.exports = messageTypes;