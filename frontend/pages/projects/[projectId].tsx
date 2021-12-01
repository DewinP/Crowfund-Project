import {
  Divider,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import {
  useFindAllPledgesByProjectQuery,
  useFindProjectQuery,
} from "../../app/services/api";
import CoolTransition from "../../components/CoolTransition";
import FullPageLoader from "../../components/FullPageLoader";
import ProjectHero from "../../components/ProjectHero";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const projectId = router.query.projectId as string;
  const { isLoading, data: project } = useFindProjectQuery(projectId, {
    skip: !projectId,
  });

  if (isLoading) return <FullPageLoader />;

  return (
    <CoolTransition>
      {project && <ProjectHero project={project} />}
      <Divider mt={4} />
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack my={4}>
              <Heading>Description</Heading>
              <Text>{project?.description}</Text>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CoolTransition>
  );
};

export default ProjectPage;
