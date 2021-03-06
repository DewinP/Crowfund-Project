import {
  Button,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Tag,
  TagLabel,
  TagRightIcon,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IProject } from "../intefaces";
import { calculateTimeUntil } from "../utils/calculateTimeUntil";
import { FaRegClock, FaHandHoldingUsd } from "react-icons/fa";
import { useFindAllPledgesByProjectQuery } from "../app/services/api";
import { calculatePercentage } from "../utils/calculatePercentage";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import CoolTransition from "./CoolTransition";
import { FiEdit } from "react-icons/fi";
import UserInfo from "./UserInfo";
import BackerTag from "./BackerTag";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const daysLeft = calculateTimeUntil(project?.dueDate);

  const { isLoading: isLoadingPledges, data: pledges } =
    useFindAllPledgesByProjectQuery({ projectId: project?._id });

  const currentFunding = pledges
    ?.map(({ amount }) => amount)
    .reduce((prev, curr) => prev + curr, 0);

  const currentFundingPercentage = calculatePercentage(
    currentFunding,
    project?.pledgeGoal
  );

  let { user } = useAppSelector(selectCurrentUser);
  const isBacker = pledges?.some((pledge) => pledge.user === user?._id);
  const isCreator = project.user === user?._id;
  return (
    <CoolTransition>
      <Stack
        direction={{ base: "column", md: "row" }}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 0px 4px 0px"
        rounded={"md"}
        spacing={4}
        w="100%"
        p={6}
      >
        <Image
          maxW={{ base: "100%", md: "200px" }}
          borderRadius={10}
          src={project?.heroImage}
        />
        <Stack w="100%">
          <Stack>
            <Flex justifyContent="space-between">
              <Heading fontSize="2xl">{project?.name}</Heading>
              {isBacker && <BackerTag />}
            </Flex>

            <Flex justifyContent="space-between" textAlign="center">
              <Skeleton isLoaded={!isLoadingPledges}>
                <Text
                  color="green.500"
                  fontWeight={800}
                  fontSize="sm"
                  letterSpacing={1.1}
                  textAlign="center"
                >
                  {currentFundingPercentage}% funded
                </Text>
              </Skeleton>

              <Flex color="gray.500" align="center">
                <Icon as={FaRegClock} />
                <Text
                  color="gray.500"
                  fontWeight={800}
                  fontSize="sm"
                  textAlign="center"
                  letterSpacing={1.1}
                  ml={1}
                >
                  {`${daysLeft} days left`}
                </Text>
              </Flex>
            </Flex>

            <Text color="gray.500" noOfLines={2}>
              {project?.description.length > 100
                ? project?.description.substring(0, 300) + "..."
                : project?.description}
            </Text>
          </Stack>
          <Stack
            mt={6}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={2}>
              <Link href={`/projects/${project._id}`}>
                <Button colorScheme="green">Read more</Button>
              </Link>
              {isCreator && (
                <Link href={`/projects/${project._id}/edit`}>
                  <Button leftIcon={<FiEdit />}>Edit</Button>
                </Link>
              )}
            </Stack>
            <UserInfo name={project.creator} fontWeight="700" />
          </Stack>
        </Stack>
      </Stack>
    </CoolTransition>
  );
};

export default ProjectCard;
