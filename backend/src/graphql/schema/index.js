// src/schema/index.js
const { gql } = require("graphql-tag");
const messageTypes = require("../../modules/messages/message.types");
const groupTypes = require("../../modules/groups/group.types");
const groupMessageTypes = require("../../modules/messages/message.groupMessage.types");
const userTypes = require("../../modules/users/user.types");
const memberTypes = require("../../modules/groups/group.memberType.types");

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
