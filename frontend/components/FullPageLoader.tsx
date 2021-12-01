import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { MotionBox } from "./Layout";

const FullPageLoader: React.FC = () => {
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
      transition={{ duration: "0.4" }}
    >
      <Center w="100%" h="100vh">
        <Spinner
          thickness="10px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          w="200px"
          h="200px"
        />
      </Center>
    </MotionBox>
  );
};

export default FullPageLoader;
