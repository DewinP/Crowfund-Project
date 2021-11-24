import { Box } from "@chakra-ui/layout";
import { BoxProps, Skeleton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useMeQuery } from "../app/services/api";
import Navbar from "./Navbar/Navbar";

export const MotionBox = motion<BoxProps>(Box);
const Layout: React.FC<{}> = ({ children }) => {
  const {isFetching} = useMeQuery()
  return (
    <Box p={8}>
      {isFetching ? <Skeleton/> : <Navbar />}
        <Box>
          {children}
        </Box>
    </Box>
  );
};

export default Layout;
