import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <Center width="100%" height="100%">
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color="gray.500" mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button colorScheme="teal">Go Back</Button>
      </Box>
    </Center>
  );
};

export default ErrorPage;
