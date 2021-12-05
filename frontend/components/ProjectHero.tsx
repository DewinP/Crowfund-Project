import { Heading, SimpleGrid, Stack } from "@chakra-ui/layout";
import {
  Button,
  Flex,
  Image,
  Progress,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { useAppSelector } from "../app/hooks";
import { useFindAllPledgesByProjectQuery } from "../app/services/api";
import { selectCurrentUser } from "../app/services/Auth.slice";
import { IProject } from "../intefaces";
import { calculatePercentage } from "../utils/calculatePercentage";
import { calculateTimeUntil } from "../utils/calculateTimeUntil";
import { toLocale } from "../utils/toLocale";
import UserInfo from "./UserInfo";

interface IProjectHeroProps {
  project: IProject;
}

const ProjectHero: React.FC<IProjectHeroProps> = ({ project }) => {
  let { user } = useAppSelector(selectCurrentUser);

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

  const isCreator = project.user === user?._id;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Image
        rounded={"md"}
        alt={"feature image"}
        src={project?.heroImage}
        fallbackSrc={`https://picsum.photos/seed/${project._id}/500/400`}
        objectFit={"cover"}
      />
      <Stack>
        <Flex justifyContent="space-between">
          <Heading fontSize="2xl">{project?.name}</Heading>
          <UserInfo fontWeight="700" name={project.creator} />
        </Flex>
        <Stack spacing={0}>
          <Stat>
            <StatNumber fontSize={{ base: "15px", md: "25px" }}>
              <Text as="span" fontWeight="bold" color="green">
                ${!isLoadingPledges && toLocale(currentFunding)}
              </Text>
            </StatNumber>
            <StatHelpText fontSize="15">
              pledged out of ${toLocale(project.pledgeGoal)} goal
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
            colorScheme="green"
            hasStripe
            value={currentFundingPercentage}
          />

          {isCreator ? (
            <Link href={`/projects/${project?._id}/edit`} passHref>
              <Button
                leftIcon={<FiEdit />}
                isFullWidth
                size="lg"
                colorScheme="teal"
              >
                Edit Project
              </Button>
            </Link>
          ) : (
            <Link href={`/projects/${project?._id}/pledge`} passHref>
              <Button isFullWidth size="lg" colorScheme="pink">
                Become a Backer
              </Button>
            </Link>
          )}
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};

export default ProjectHero;
