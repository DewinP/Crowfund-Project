import { Stack } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useFindAllProjectsQuery } from "../app/services/api";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const { data: projects } = useFindAllProjectsQuery();
  return (
    <Layout>
      <Stack alignItems="center">
        <InputGroup maxW="600px">
          <InputLeftElement children={<FaSearch />} />
          <Input type="text" placeholder="Search projects" />
        </InputGroup>
        <Stack
          direction={["column", "row"]}
          wrap="wrap"
          justifyContent="center"
        >
          {projects?.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Projects;
