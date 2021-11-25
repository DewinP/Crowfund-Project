import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Link, Stack,Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/react";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import {  IUser } from "../../intefaces";
import CustomLink from "../CustomLink";
import AuthMenu from "./AuthMenu";


const MobileNav:React.FC = () => {;

  return (
    <Stack spacing={4} >
      <Stack
        py={2}
        _hover={{
          textDecoration: 'none',
        }}>
        <CustomLink  href="/">
          Projects
        </CustomLink>
        <CustomLink  href="/">
          Create Project
        </CustomLink>
      </Stack>
    </Stack>
  )
};

export default MobileNav;
