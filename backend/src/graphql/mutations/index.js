const deleteMessage = require("./chat/message/deleteMessage");
const createGroup = require("./chat/groupChat/createGroup");
const addMemberToGroup = require("./chat/groupChat/addMemberToGroup");
const promoteMemberToAdmin = require("./chat/groupChat/promoteMemberToAdmin");
const removeMemberFromGroup = require("./chat/groupChat/removeMemberFromGroup");
const storeUserMessages = require("../../modules/messages/message.mutation");
const signupUser = require("../../modules/auth/auth.signup.mutation");
const loginUser = require("../../modules/auth/auth.login.mutation");
const logoutUser = require("../../modules/auth/auth.logout.mutation");
const mutations = [
  signupUser,
  loginUser,
  logoutUser,
  storeUserMessages,
  deleteMessage,
  createGroup,
  addMemberToGroup,
  promoteMemberToAdmin,
  removeMemberFromGroup,
];

module.exports = mutations;
