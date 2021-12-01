import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IProject, IProjectInput } from "../intefaces";
import { calculateTimeUntil } from "../utils/calculateTimeUntil";
import { FaRegClock } from "react-icons/fa";
import { useFindAllPledgesByProjectQuery } from "../app/services/api";
import { calculatePercentage } from "../utils/calculatePercentage";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import { BiMessageSquareEdit } from "react-icons/bi";

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

  const [projectEditableInfo, setProjectEditableInfo] =
    React.useState<IProjectInput>({
      name: project?.name,
      description: project?.description,
      dueDate: project?.dueDate,
      pledgeGoal: project?.pledgeGoal,
    });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectEditableInfo({
      ...projectEditableInfo,
      [e.target.name]: e.target.value,
    });
    console.log(projectEditableInfo);
  };

  const isCreator = project.user === user?._id;
  return (
    <Center py={6}>
      <Stack
        height={{ base: "400px", md: "300px" }}
        w={{ base: "100%", md: "450px" }}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={"md"}
        p={6}
        overflow="hidden"
        justifyContent="space-between"
      >
        <Stack>
          <Heading fontSize="2xl">{project?.name}</Heading>

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

          <Text color="gray.500">
            {project?.description.length > 100
              ? project?.description.substring(0, 100) + "..."
              : project?.description}
          </Text>
        </Stack>
        <Stack
          mt={6}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href={`projects/${project._id}`}>
            <Button colorScheme="green">Read more</Button>
          </Link>
          {isCreator && (
            <Link href={`projects/${project._id}/edit`}>
              <Button>Edit</Button>
            </Link>
          )}
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProjectCard;
