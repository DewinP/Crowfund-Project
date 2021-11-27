import { Heading } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCreatePledgeMutation } from "../../app/services/api";
import CardContainer from "../../components/CardContainer";
import Layout from "../../components/Layout";
const Pledge: NextPage = () => {
  const router = useRouter();
  let projectId = router.query.projectId as string;
  let sessionId = router.query.session_id as string;
  const [createPledge] = useCreatePledgeMutation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const createOrder = async () => {
      try {
        await createPledge({ projectId, sessionId });
        setIsLoading(false);
      } catch (error) {}
    };
    createOrder();
  }, []);

  return (
    <Layout>
      <CardContainer>{isLoading && <Heading>Loading</Heading>}</CardContainer>
    </Layout>
  );
};
export default Pledge;
