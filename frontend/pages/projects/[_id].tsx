import { Heading, Stack, Text } from "@chakra-ui/react";
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
      <Stack my={4}>
        <Heading>Description</Heading>
        <Text>
          dkqwldnlkwqmnfwqklmflwqkmfqwmkfq wfqwmf;qlwmfwqmfmqwf qwfmqwflm
        </Text>
      </Stack>
    </Layout>
  );
};

export default ProjectPage;
