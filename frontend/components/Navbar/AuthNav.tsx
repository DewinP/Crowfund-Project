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
              {user.firstName + " " + user.lastName.charAt(0) + "."}
            </MenuButton>
            <MenuList m={0} p={0}>
              <MenuItem>Backed Projects</MenuItem>
              <MenuItem>Owned Projects</MenuItem>
              <MenuDivider p={0} m={0} />
              <MenuItem
                onClick={() => {
                  logout();
                  router.replace("/login");
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
