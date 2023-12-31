const { gql } = require("apollo-server-express");

const groupTypes = gql`
  type Group {
    groupId: String
    groupName: String!
    adminId: Int!
    members: [Member!]!
    messages: [GroupMessage!]!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getAllGroups: GetAllGroupsResponse!
  }

  extend type Mutation {
    createGroup(
      groupId: String
      groupName: String!
      adminId: Int!
    ): CreateGroupResponse!
  }

  type CreateGroupResponse {
    message: String!
    success: Boolean!
  }

  type GetAllGroupsResponse {
    success: Boolean!
    groups: [Group!]
    message: String
  }
`;

module.exports = groupTypes;
