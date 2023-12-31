import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import UserListItem from "../../../SubModules/UserListItem/UserListItem";
import { Chat } from "../../../../../constants/paths";
import { user_details } from "../../../../../utils/getUserDetails";

const ChatListItem = styled.div`
  position: relative;
  margin-bottom: 10px;
  height: 55px;
  background: transparent;
  padding: 8px 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

const ChatListItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  overflow-y: scroll;
  height: 80vh;
`;

const NormalChat = ({ users, onlineUsers, getRecipient, showChatContent }) => {
  const router = useRouter();

  const isAuthorized =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("isAuthorised"))
      : null;

  useEffect(() => {
    isAuthorized !== "true"
      ? router.push({
          pathname: Chat,
        })
      : null;
  }, []);

  return (
    <ChatListItemContainer>
      {users.map((item, index) => (
        <ChatListItem
          key={index}
          onClick={() => {
            localStorage.setItem(
              "currentChatId",
              `${item.id}_${user_details?.id}`
            );
            localStorage.setItem("selectedRecipient", JSON.stringify(item));
            getRecipient(item, !showChatContent);
          }}
        >
          <UserListItem
            user={{
              id: item.id.toString(),
              firstname: item.firstname,
              lastname: item.lastname,
            }}
            userIconSize={"sm"}
            userNameFont={"sm"}
            isOnline={onlineUsers?.some((user) => user?.id === item.id)}
            isCheckbox={false}
          />
        </ChatListItem>
      ))}
    </ChatListItemContainer>
  );
};

export default NormalChat;
