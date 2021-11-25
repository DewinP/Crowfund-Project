import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/layout";
import {
  Button,
  Image,
  Progress,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProjectHero: React.FC = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Image
        rounded={"md"}
        alt={"feature image"}
        src={`https://picsum.photos/seed/${1}/700/500`}
        objectFit={"cover"}
      />
      <Stack>
        <Heading>Project Title</Heading>
        <Stack flexDir={{ base: "column", md: "row" }}>
          <Stat p={2}>
            <StatNumber fontSize={{ base: "25px", md: "40px" }}>
              $10,340
            </StatNumber>
            <StatHelpText fontSize="20">Pledged</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize={{ base: "25px", md: "40px" }}>400</StatNumber>
            <StatHelpText fontSize="20">Backers</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize={{ base: "25px", md: "40px" }}>30</StatNumber>
            <StatHelpText fontSize="20">Days Left</StatHelpText>
          </Stat>
        </Stack>
        <Stack>
          <Box>
            <Flex justifyContent="space-between">
              <Text fontSize="25px">
                Goal:<Text as="span">13,000</Text>
              </Text>
              <Text color="teal" fontSize="25px" fontWeight="bold">
                80%
              </Text>
            </Flex>
            <Progress mb={8} height="32px" colorScheme="teal" value={80} />
          </Box>
          <Button isFullWidth size="lg" colorScheme="pink">
            Become a Backer
          </Button>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};

export default ProjectHero;
