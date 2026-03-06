// src/queries/index.js
const getUsersMessages = require("../../modules/messages/message.query");
const getAllGroups = require("./Chat/groupChat/getAllGroups");
const getAllUsers = require("./getAllUsers");

const queries = [getAllUsers, getUsersMessages, getAllGroups];

module.exports = queries;
