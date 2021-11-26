import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Collapse, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../app/services/Auth.slice";
import AuthNav from "./AuthNav";
import LeftNav from "./LeftNav";
import NotAuthNav from "./NotAuthNav";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  let { isLoggedIn, user } = useAppSelector(selectCurrentUser);
  return (
    <Box>
      <Flex minH="60px" align="center">
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          alignItems="center"
          justify={{ base: "center", md: "start" }}
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "md", md: "lg" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Crowfund
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <LeftNav />
          </Flex>
        </Flex>

        {isLoggedIn ? <AuthNav user={user} /> : <NotAuthNav />}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack display={{ md: "none" }}>
          <LeftNav isMobile />
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
