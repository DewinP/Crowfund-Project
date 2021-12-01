import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IProject } from "../intefaces";
import { calculateTimeUntil } from "../utils/calculateTimeUntil";
import { FaRegClock } from "react-icons/fa";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const daysLeft = calculateTimeUntil(project.dueDate);

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
          <Heading fontSize="2xl">{project.name}</Heading>
          <Flex justifyContent="space-between" textAlign="center">
            <Text
              color="green.500"
              fontWeight={800}
              fontSize="sm"
              letterSpacing={1.1}
              textAlign="center"
            >
              000% funded
            </Text>

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
            {project.description.substring(0, 200) + "..."}
          </Text>
        </Stack>
        <Stack
          mt={6}
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href={`projects/${project._id}`}>
            <Button variant="ghost" colorScheme="red">
              Read more
            </Button>
          </Link>
          <Text fontWeight={600}>By Someone</Text>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProjectCard;
