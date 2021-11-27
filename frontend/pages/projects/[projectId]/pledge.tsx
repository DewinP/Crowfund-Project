import { Heading } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useFindProjectQuery } from "../../../app/services/api";
import CardContainer from "../../../components/CardContainer";
import Layout from "../../../components/Layout";
import PaymentForm from "../../../components/PaymontForm";
const Pledge: NextPage = () => {
  const router = useRouter();
  let projectId = router.query.projectId as string;
  let { data, isLoading } = useFindProjectQuery(projectId);
  return (
    <Layout>
      <CardContainer>
        {isLoading && <Heading>Loading</Heading>}
        {data && <PaymentForm project={data} />}
      </CardContainer>
    </Layout>
  );
};
export default Pledge;
