import { Box } from "@chakra-ui/layout";
import { BoxProps, Skeleton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useMeQuery } from "../app/services/api";
import Navbar from "./Navbar/Navbar";

export const MotionBox = motion<BoxProps>(Box);
const Layout: React.FC<{}> = ({ children }) => {
  useMeQuery()
  return (
    <Box p={8}>
      <Navbar/>
        <Box>
          {children}
        </Box>
    </Box>
  );
};

export default Layout;
