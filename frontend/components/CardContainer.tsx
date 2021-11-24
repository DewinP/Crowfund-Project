import { Flex, Box } from "@chakra-ui/layout";
import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  maxWidth = "500px",
}) => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        p={4}
        width="full"
        maxWidth={maxWidth}
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
