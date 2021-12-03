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
  useFindCommentsByProjectQuery,
  useFindProjectQuery,
} from "../../app/services/api";
import CommentList from "../../components/CommentList";
import CoolTransition from "../../components/CoolTransition";
import FullPageLoader from "../../components/FullPageLoader";
import ProjectHero from "../../components/ProjectHero";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const projectId = router.query.projectId as string;
  const { isLoading, data: project } = useFindProjectQuery(projectId, {
    skip: !projectId,
  });
  const { data: comments } = useFindCommentsByProjectQuery(
    {
      projectId: projectId,
    },
    {
      skip: !projectId,
    }
  );
  if (isLoading) return <FullPageLoader />;

  return (
    <CoolTransition>
      {project && <ProjectHero project={project} />}
      <Divider mt={4} />
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Comments</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack>
              <Text>{project?.description}</Text>
            </Stack>
          </TabPanel>
          <TabPanel>
            <CommentList comments={comments} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CoolTransition>
  );
};

export default ProjectPage;
