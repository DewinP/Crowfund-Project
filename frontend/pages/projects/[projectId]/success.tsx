import { Heading } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCreatePledgeMutation } from "../../../app/services/api";
import CardContainer from "../../../components/CardContainer";
import Layout from "../../../components/Layout";
import { IPledge } from "../../../intefaces";

const Pledge: NextPage = () => {
  const router = useRouter();
  let projectId = router.query.projectId as string;
  let sessionId = router.query.session_id as string;
  const [createPledge] = useCreatePledgeMutation();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setPledge] = useState<IPledge | null>(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        let order = await createPledge({ projectId, sessionId }).unwrap();
        setIsLoading(false);
        setPledge(order);
      } catch (error) {}
    };
    sessionId && projectId && createOrder();
  }, [sessionId, projectId]);

  console.log(order);
  return (
    <Layout>
      <CardContainer>{isLoading && <Heading>Loading</Heading>}</CardContainer>
    </Layout>
  );
};
export default Pledge;
