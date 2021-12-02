import { Center, Heading, Stack } from "@chakra-ui/layout";
import { NextPage } from "next";
import React from "react";
import { useFindAllProjectsByUserQuery } from "../../app/services/api";
import FullPageLoader from "../../components/FullPageLoader";
import ProjectList from "../../components/ProjectList";

const Me: NextPage = () => {
  const { isLoading, data: projects } = useFindAllProjectsByUserQuery();

  return (
    <Stack align="center">
      <Heading mb={4}> My projects</Heading>
      <ProjectList isLoading={isLoading} projects={projects} />
    </Stack>
  );
};

export default Me;
