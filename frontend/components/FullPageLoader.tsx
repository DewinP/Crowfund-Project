import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import CoolTransition from "./CoolTransition";

const FullPageLoader: React.FC = () => {
  return (
    <CoolTransition>
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
    </CoolTransition>
  );
};

export default FullPageLoader;
