const { gql } = require("apollo-server-express");

const userTypes = gql`
  type User {
    id: ID!
    uuid: String
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    password: String!
    accessToken: String
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getUsers: [User!]!
  }

  extend type Mutation {
    login(email: String!, password: String!): LoginResponse!

    logout: LogoutResponse!

    signup(
      uuid: String
      firstname: String!
      lastname: String!
      username: String
      email: String!
      password: String!
      confirmPassword: String!
    ): SignupResponse!
  }

  type LoginResponse {
    message: String!
    success: Boolean!
    user: User
  }

  type SignupResponse {
    message: String!
    success: Boolean!
    user: User
  }

  type LogoutResponse {
    message: String!
    success: Boolean!
  }
`;

module.exports = userTypes;
