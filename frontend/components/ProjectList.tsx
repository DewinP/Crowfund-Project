import { Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import { IProject } from "../intefaces";
import FullPageLoader from "./FullPageLoader";
import ProjectCard from "./ProjectCard";

const ProjectList: React.FC<{ projects: IProject[]; isLoading: boolean }> = ({
  projects,
  isLoading,
}) => {
  if (isLoading) return <FullPageLoader />;
  return (
    <Stack h="100vh">
      {projects?.map((project) => {
        return <ProjectCard key={project._id} project={project} />;
      })}
      {!projects?.length && (
        <Heading textAlign="center">No projects found</Heading>
      )}
    </Stack>
  );
};

export default ProjectList;
