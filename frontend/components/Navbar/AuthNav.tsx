import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Button, Flex, Icon } from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiPower } from "react-icons/fi";
import { useLogoutMutation } from "../../app/services/api";
import { IUser } from "../../intefaces";
import UserInfo from "../UserInfo";

const AuthNav: React.FC<{ user: IUser }> = ({ user }) => {
  const [logout] = useLogoutMutation();
  return (
    <Flex>
      <Menu closeOnBlur>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              alignItems="center"
              variant="ghost"
              rightIcon={!isOpen ? <FaChevronDown /> : <FaChevronUp />}
              isActive={isOpen}
            >
              <UserInfo name={user.name} />
            </MenuButton>
            <MenuList m={0} p={0}>
              <MenuItem onClick={() => router.push("/pledges")}>
                My Pledges
              </MenuItem>
              <MenuItem
                onClick={() => {
                  router.push("/projects/me");
                }}
              >
                Owned Projects
              </MenuItem>
              <MenuDivider p={0} m={0} />
              <MenuItem
                onClick={async () => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  await logout();

                  router.push("/login");
                }}
              >
                <Icon as={FiPower} mr={2} />
                Logout
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};

export default AuthNav;
