import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import {  IUser } from "../../intefaces";
import AuthMenu from "./AuthMenu";

interface MobileMenuProps {
  isLoggedIn?: boolean;
  user?: IUser;
  toggleMenu: () => void;
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isLoggedIn,
  toggleMenu,
  isOpen,
  user,
}) => {
  return !isLoggedIn ? (
    <Button
      variant="ghost"
      display={{ base: "block", md: "none" }}
      onClick={toggleMenu}
      cursor="pointer"
    >
      {isOpen ? <Icon as={BiX} /> : <Icon as={BiMenu} />}
    </Button>
  ) : (
    <Box display={{ base: "block", md: "none" }}>
      <AuthMenu user={user} isMobile />
    </Box>
  );
};

export default MobileMenu;
