import { Center, Heading, Stack } from "@chakra-ui/layout";
import { NextPage } from "next";
import React from "react";
import { useFindAllProjectsByUserQuery } from "../../app/services/api";
import CoolTransition from "../../components/CoolTransition";
import ProjectList from "../../components/ProjectList";

const Me: NextPage = () => {
  const { isLoading, data: projects } = useFindAllProjectsByUserQuery();

  return (
    <CoolTransition>
      <Stack px={{ base: 0, md: 10 }}>
        <Heading mb={4}>My projects</Heading>
        <ProjectList isLoading={isLoading} projects={projects} />
      </Stack>
    </CoolTransition>
  );
};

export default Me;
