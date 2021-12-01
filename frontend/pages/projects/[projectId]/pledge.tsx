import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useFindProjectQuery } from "../../../app/services/api";
import CardContainer from "../../../components/CardContainer";
import CoolTransition from "../../../components/CoolTransition";
import FullPageLoader from "../../../components/FullPageLoader";
import PaymentForm from "../../../components/PaymentForm";
const Pledge: NextPage = () => {
  const router = useRouter();
  let projectId = router.query.projectId as string;
  let { data, isLoading } = useFindProjectQuery(projectId, {
    skip: !projectId,
  });
  if (isLoading) {
    return <FullPageLoader />;
  }
  return (
    <CoolTransition>
      <CardContainer>{data && <PaymentForm project={data} />}</CardContainer>
    </CoolTransition>
  );
};
export default Pledge;
