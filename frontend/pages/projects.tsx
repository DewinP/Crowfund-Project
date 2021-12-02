import { Stack } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useFindAllProjectsQuery } from "../app/services/api";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const { data } = useFindAllProjectsQuery();
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
    <Stack>
      <InputGroup maxW="600px">
        <InputLeftElement children={<FaSearch />} />
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search projects"
        />
      </InputGroup>
      {projects?.map((project) => {
        return <ProjectCard key={project._id} project={project} />;
      })}
    </Stack>
  );
};

export default Projects;
