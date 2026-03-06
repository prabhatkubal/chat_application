// src/queries/index.js
const getGroups = require("../../modules/groups/group.getAllGroups.query");
const getUsersMessages = require("../../modules/messages/message.getUsersMessages.query");
const getAllUsers = require("../../modules/users/user.getAllUsers.query");

const queries = [getAllUsers, getUsersMessages, getGroups];

module.exports = queries;
