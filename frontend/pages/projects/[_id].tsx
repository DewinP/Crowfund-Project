import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import ProjectHero from "../../components/ProjectHero";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <Layout>
      <ProjectHero />
      <Tabs mt={4} size="lg" variant="enclosed">
        <TabList>
          <Tab>Description</Tab>
          <Tab>Comments</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>lqkrqwrqr qrwqwrqwr qwr qwrqw rwqr qwr</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default ProjectPage;
