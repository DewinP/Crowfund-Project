import { Button } from "@chakra-ui/button";
import { Box, Stack } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
import { IUser } from "../../intefaces";
import AuthMenu from "./AuthMenu";

interface NavMenuProps {
  user?: IUser;
  isOpen: boolean;
  isLoggedIn?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, isLoggedIn, user }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        alignItems="center"
      >
        {!isLoggedIn ? (
          <>
            <Link href="/login">
              <Button variant="ghost" width={isOpen && "100%"}>
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button colorScheme="teal" width={isOpen && "100%"}>
                Signup
              </Button>
            </Link>
          </>
        ) : (
          <AuthMenu user={user} />
        )}
      </Stack>
    </Box>
  );
};

export default NavMenu;
