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
        if (project.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return project;
        }
      })
    : data;

  return (
    <Stack alignItems="center">
      <InputGroup maxW="600px">
        <InputLeftElement children={<FaSearch />} />
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search projects"
        />
      </InputGroup>
      <Stack direction={["column", "row"]} wrap="wrap" justifyContent="center">
        {projects?.length > 0 &&
          projects?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
