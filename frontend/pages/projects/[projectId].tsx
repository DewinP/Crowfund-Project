import { Heading, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useFindProjectQuery } from "../../app/services/api";
import FullPageLoader from "../../components/FullPageLoader";
import ProjectHero from "../../components/ProjectHero";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const projectId = router.query.projectId as string;
  const { isLoading, data: project, isError } = useFindProjectQuery(projectId);
  if (isLoading) return <FullPageLoader />;
  if (!isLoading && isError) {
    router.replace("/404");
  }
  return (
    <>
      <ProjectHero p={project} />
      <Stack my={4}>
        <Heading>Description</Heading>
        <Text>{project?.description}</Text>
      </Stack>
    </>
  );
};

export default ProjectPage;
