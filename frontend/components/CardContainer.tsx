import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  width?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  width = "500px",
}) => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        p={4}
        width={width}
        borderRadius={8}
        textAlign="center"
        boxShadow="lg"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default CardContainer;
