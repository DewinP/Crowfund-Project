import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useFindProjectQuery } from "../../../app/services/api";
import CardContainer from "../../../components/CardContainer";
import FullPageLoader from "../../../components/FullPageLoader";
import PaymentForm from "../../../components/PaymentForm";
const Pledge: NextPage = () => {
  const router = useRouter();
  let projectId = router.query.projectId as string;
  let { data, isLoading } = useFindProjectQuery(projectId);
  if (isLoading) {
    return <FullPageLoader />;
  }
  return (
    <CardContainer>{data && <PaymentForm project={data} />}</CardContainer>
  );
};
export default Pledge;
