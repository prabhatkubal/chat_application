import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../../Common/Button";
import { useRouter } from "next/router";
import Switch from "../../../Common/SwitchToggle";
import { LOGOUT_USER } from "../../../../gql/mutations/auth/logoutUser";
import { useMutation } from "@apollo/client";
import UserListItem from "../UserListItem/UserListItem";
import { Settings } from "../../../../constants/paths";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import { useThemeContext } from "../../../../theme/themeContext";

const Hamburger = styled.div``;

const HamburgerIcon = styled.div`
  width: 20px;
  padding-top: 8px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.backgroundaltrev};
    transition: background-color 0.3s ease;

    &:first-child {
      transform-origin: top left;
    }

    &:last-child {
      transform-origin: bottom left;
    }
  }

  // &.open {
  //   div {
  //     &:first-child {
  //       transform: rotate(45deg) translate(2px, 3px);
  //     }

  //     &:nth-child(2) {
  //       opacity: 0;
  //     }

  //     &:last-child {
  //       transform: rotate(-45deg) translate(2px, -3px);
  //     }
  //   }
  }
`;

const HamburgerMenu = styled.ul`
  position: absolute;
  top: 0;
  left: -100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  list-style: none;
  -webkit-transition: right 0.3s ease;
  transition: right 0.3s ease;
  width: 200px;
  height: 100%;
  z-index: 5;
  margin: 0;

  &.open {
    left: 0;
  }
`;

const HamburgerActiveMask = styled.ul`
  z-index: 3;
  background-color: #252331;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  transition: opacity 0.15s linear;
`;

const HamburgerMenuItem = styled.li`
  margin-bottom: 8px;
`;

const HamburgerMenuIcon = ({
  isOpen,
  onClick,
  onOutsideClick,
}: {
  isOpen: boolean;
  onClick: () => void;
  onOutsideClick: () => void;
}) => {
  const user_details = useUserDetails();
  const router = useRouter();
  const { toggleTheme, isDarkMode } = useThemeContext();
  const [logoutUser, { loading: logoutLoading, error: logoutError   }] =
    useMutation(LOGOUT_USER);

  const handleSwitchToggle = () => {
    toggleTheme();
  };

  const handleLogout = async () => {
    try {
      const { data } = await logoutUser();
      console.log(data.message); // Display success message

      localStorage.clear();
      sessionStorage.clear();
      router.push({
        pathname: "/account/login",
      });
      // Redirect to login page
      // window.location.href = "/account/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Hamburger>
      <HamburgerIcon className={isOpen ? "open" : ""} onClick={onClick}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <HamburgerMenu className={isOpen ? "open" : ""}>
        <UserListItem
          user={{
            id: user_details?.id?.toString(),
            firstname: user_details?.firstname,
            lastname: user_details?.lastname,
          }}
          userIconSize={"sm"}
          userNameFont={"sm"}
          isOnline
          isCheckbox={false}
        />
        {/* <HamburgerMenuItem>Saved Messages</HamburgerMenuItem> */}
        <HamburgerMenuItem onClick={() => router.push(Settings)}>
          Settings
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <Switch
            isChecked={isDarkMode}
            handleToggle={handleSwitchToggle}
            tgColor="#ccd3da"
          />
          Night Time
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <Button onClick={handleLogout}>Logout</Button>
        </HamburgerMenuItem>
      </HamburgerMenu>
      {isOpen ? (
        <HamburgerActiveMask onClick={onOutsideClick}></HamburgerActiveMask>
      ) : null}
    </Hamburger>
  );
};

export default React.memo(HamburgerMenuIcon);
