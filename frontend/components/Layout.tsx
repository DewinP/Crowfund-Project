import { Box, Divider } from "@chakra-ui/layout";
import { BoxProps, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import Navbar from "./Navbar/Navbar";

const Layout: React.FC<{}> = ({ children }) => {
  let { isLoggedIn, user } = useAppSelector(selectCurrentUser);

  return (
    <Box px={{ base: 4, md: 8 }}>
      <Navbar isLoggedIn={isLoggedIn} user={user} />
      <Divider />
      <Center>
        <Box
          marginTop={8}
          maxW="1400px"
          minW={{
            base: "100%",
            sm: "40em",
            md: "52em",
            lg: "64em",
            xl: "80em",
          }}
        >
          {children}
        </Box>
      </Center>
    </Box>
  );
};

export default Layout;
