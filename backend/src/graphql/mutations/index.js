const storeUserMessages = require("../../modules/messages/message.storeUserMessages.mutation");
const signupUser = require("../../modules/auth/auth.signup.mutation");
const loginUser = require("../../modules/auth/auth.login.mutation");
const logoutUser = require("../../modules/auth/auth.logout.mutation");
const deleteSelectedMessage = require("../../modules/messages/message.deleteMessage.mutation");
const createAGroup = require("../../modules/groups/group.createAGroup.mutation");
const addToGroup = require("../../modules/groups/group.addMemberToGroup.mutation");
const promoteMemberToAdmin = require("../../modules/groups/group.promoteMemberToAdmin.mutation");
const removeMemberFromGroup = require("../../modules/groups/group.removeFromGroup.mutation");
const mutations = [
  signupUser,
  loginUser,
  logoutUser,
  storeUserMessages,
  deleteSelectedMessage,
  createAGroup,
  addToGroup,
  promoteMemberToAdmin,
  removeMemberFromGroup,
];

module.exports = mutations;
