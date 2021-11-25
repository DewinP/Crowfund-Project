import { Stack } from "@chakra-ui/layout";
import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const ProjectPage:React.FC = () => {

    return(
        <Layout>
            <Stack direction={["column", "row"]} spacing="24px" wrap="wrap" justifyContent='center'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            </Stack>
        </Layout>
    )
}   

export default ProjectPage;