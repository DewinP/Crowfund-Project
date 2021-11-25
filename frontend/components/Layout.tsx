import { Box, Divider } from "@chakra-ui/layout";
import { BoxProps, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useMeQuery } from "../app/services/api";
import Navbar from "./Navbar/Navbar";

export const MotionBox = motion<BoxProps>(Box);
const Layout: React.FC<{}> = ({ children }) => {
  useMeQuery();
  return (
    <Box px={8}>
      <Navbar />
      <Divider />
      <Center>
        <Box marginTop={8} maxW="1400px" minW={{ base: "100%" }}>
          {children}
        </Box>
      </Center>
    </Box>
  );
};

export default Layout;
