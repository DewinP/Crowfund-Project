import { Divider, Heading, Stack } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useFindAllProjectsQuery, useMeQuery } from "../app/services/api";
import CoolTransition from "../components/CoolTransition";
import ProjectList from "../components/ProjectList";

const Projects: React.FC = () => {
  useMeQuery();
  const { data, isLoading } = useFindAllProjectsQuery();
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const projects = searchTerm
    ? data.filter((project) => {
        if (project.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return project;
        }
      })
    : data;

  return (
    <Stack px={{ base: 0, md: "10" }}>
      <InputGroup maxW="600px">
        <InputLeftElement children={<FaSearch />} />
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search projects"
        />
      </InputGroup>
      {searchTerm && (
        <CoolTransition>
          <Heading>Search results for '{searchTerm}'</Heading>
          <Divider mb={3} />
        </CoolTransition>
      )}
      <ProjectList isLoading={isLoading} projects={projects} />
    </Stack>
  );
};

export default Projects;
