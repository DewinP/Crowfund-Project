import { BoxProps, Box } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const CoolTransition: React.FC<{ width?: string }> = ({ children, width }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <MotionBox
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: "0.3" }}
      justifyContent="center"
      width={width}
    >
      {children}
    </MotionBox>
  );
};

const MotionBox = motion<BoxProps>(Box);

export default CoolTransition;
