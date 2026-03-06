const { GraphQLError } = require("graphql");
class ResourceAlreadyExistsError extends GraphQLError {
  constructor(resourceName, conflictingField) {
    const message = `${resourceName} with ${conflictingField} already exists`;
    super(message, "RESOURCE_ALREADY_EXISTS_ERROR");
    this.resourceName = resourceName;
    this.conflictingField = conflictingField;
  }
}

module.exports = ResourceAlreadyExistsError;
