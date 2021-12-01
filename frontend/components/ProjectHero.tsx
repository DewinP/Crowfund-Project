import { Heading, SimpleGrid, Stack } from "@chakra-ui/layout";
import {
  Button,
  Image,
  Progress,
  Skeleton,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  useFindAllPledgesByProjectQuery,
  useFindProjectQuery,
} from "../app/services/api";
import { IPledge, IProject } from "../intefaces";
import { calculatePercentage } from "../utils/calculatePercentage";
import { calculateTimeUntil } from "../utils/calculateTimeUntil";

interface IProjectHeroProps {
  project: IProject;
}

const ProjectHero: React.FC<IProjectHeroProps> = ({ project }) => {
  const { isLoading: isLoadingPledges, data: pledges } =
    useFindAllPledgesByProjectQuery(
      { projectId: project?._id },
      { skip: !project._id }
    );

  //filter pledges by user and make sure they are not repeated
  const numOfBackers =
    pledges?.length > 0
      ? [...new Set(pledges?.map(({ user }) => user))].length
      : 0;

  const currentFunding = pledges
    ?.map(({ amount }) => amount)
    .reduce((prev, curr) => prev + curr, 0);

  const currentFundingPercentage = calculatePercentage(
    currentFunding,
    project.pledgeGoal
  );

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Image
        rounded={"md"}
        alt={"feature image"}
        src={`https://picsum.photos/seed/${1}/700/500`}
        objectFit={"cover"}
      />
      <Stack>
        <Heading>{project?.name}</Heading>
        <Stack spacing={0}>
          <Stat>
            <StatNumber fontSize={{ base: "20px", md: "30px" }}>
              <Text as="span" fontWeight="bold" color="green">
                {!isLoadingPledges && currentFunding}
              </Text>
            </StatNumber>
            <StatHelpText fontSize="15">
              pledged out of ${project.pledgeGoal.toLocaleString("en-US")} goal
            </StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize={{ base: "20px", md: "30px" }}>
              {!isLoadingPledges && numOfBackers}
            </StatNumber>
            <StatHelpText fontSize="15">backers</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize={{ base: "20px", md: "30px" }}>
              {calculateTimeUntil(project.dueDate)}
            </StatNumber>
            <StatHelpText fontSize="15">days Left</StatHelpText>
          </Stat>
        </Stack>
        <Stack>
          <Text size="20px" fontWeight="bold" align="right">
            {currentFundingPercentage}% funded
          </Text>
          <Progress
            height="32px"
            colorScheme="teal"
            value={currentFundingPercentage}
          />

          <Link href={`/projects/${project?._id}/pledge`} passHref>
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
