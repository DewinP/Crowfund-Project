import { Stack } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const ProjectPage: React.FC = () => {
  return (
    <Layout>
      <Stack alignItems="center">
        <InputGroup maxW="600px">
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input type="tel" placeholder="Search projects" />
        </InputGroup>
        <Stack
          direction={["column", "row"]}
          wrap="wrap"
          justifyContent="center"
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default ProjectPage;
