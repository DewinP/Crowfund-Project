import { Heading, SimpleGrid, Stack } from "@chakra-ui/layout";
import {
  Button,
  Image,
  Progress,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IProject } from "../intefaces";
import { calculateTimeUntil } from "../utils/calculateTimeUntil";

const ProjectHero: React.FC<{ p: IProject }> = ({ p }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Image
        rounded={"md"}
        alt={"feature image"}
        src={`https://picsum.photos/seed/${1}/700/500`}
        objectFit={"cover"}
      />
      <Stack>
        <Heading>{p?.title}</Heading>
        <Stack spacing={0}>
          <Stat>
            <StatNumber fontSize={{ base: "20px", md: "30px" }}>
              <Text as="span" fontWeight="bold" color="green">
                10,340
              </Text>
            </StatNumber>
            <StatHelpText fontSize="15">
              Pledged out of ${p?.pledgeGoal.toLocaleString("en-US")} goal
            </StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize={{ base: "20px", md: "30px" }}>400</StatNumber>
            <StatHelpText fontSize="15">Backers</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize={{ base: "20px", md: "30px" }}>
              {calculateTimeUntil(p?.dueDate)}
            </StatNumber>
            <StatHelpText fontSize="15">Days Left</StatHelpText>
          </Stat>
        </Stack>
        <Stack>
          <Text size="20px" fontWeight="bold" align="right">
            80% funded
          </Text>
          <Progress height="32px" colorScheme="teal" value={80} />

          <Link href={`/projects/${p._id}/pledge`} passHref>
            <Button isFullWidth size="lg" colorScheme="pink">
              Become a Backer
            </Button>
          </Link>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};

export default ProjectHero;
