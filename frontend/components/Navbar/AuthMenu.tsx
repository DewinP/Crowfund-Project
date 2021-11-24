import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Button, Avatar, Flex } from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import { useLogoutMutation } from "../../app/services/api";
import { IUser } from "../../intefaces";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AuthMenu: React.FC<{ isMobile?: boolean; user: IUser }> = ({
  isMobile,
  user,
}) => {
  const [logout] = useLogoutMutation();
  return (
    <Flex>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              alignItems="center"
              variant="ghost"
              rightIcon={!isOpen ? <FaChevronDown /> : <FaChevronUp />}
              isActive={isOpen}
            >
              {user.firstName + " " + user.lastName}
            </MenuButton>
            <MenuList m={0} p={0}>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Something else</MenuItem>
              <MenuDivider p={0} m={0} />
              <MenuItem
                onClick={() => {
                  logout();
                  router.replace("/login");
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};

export default AuthMenu;
