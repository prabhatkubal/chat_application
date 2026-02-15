const { GraphQLError } = require("graphql");
class AuthenticationError extends GraphQLError {
  constructor(message = "Permission denied") {
    super(message, "AUTHENTICATION_ERROR");
    this.message = message;
  }
}

module.exports = {
  AuthenticationError,
};
