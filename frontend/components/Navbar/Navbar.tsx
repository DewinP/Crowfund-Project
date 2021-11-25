import { Flex, Box, Text } from "@chakra-ui/layout";
import React, { FC, useState } from "react";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../app/services/Auth.slice";
import { Button, Skeleton } from "@chakra-ui/react";

const Navbar: FC = () => {
  let { user, isLoggedIn } = useAppSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
      <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Crowfund
        </Text>
      </Box>
      <Box>
      </Box>
      <MobileMenu
        user={user}
        isLoggedIn={isLoggedIn}
        isOpen={isOpen}
        toggleMenu={toggle}
      />
      <NavMenu user={user} isLoggedIn={isLoggedIn} isOpen={isOpen} />
    </Flex>
  );
};

export default Navbar;
