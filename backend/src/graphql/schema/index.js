// src/schema/index.js
const { gql } = require("graphql-tag");
const userTypes = require("../types/userTypes");
const groupTypes = require("../types/groupTypes");
const memberTypes = require("../types/memberTypes");
const groupMessageTypes = require("../types/groupMessageTypes");
const messageTypes = require("../../modules/messages/message.types");

const typeDefs = gql`
  ${userTypes}
  ${messageTypes}
  ${groupTypes}
  ${memberTypes}
  ${groupMessageTypes}

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = typeDefs;
