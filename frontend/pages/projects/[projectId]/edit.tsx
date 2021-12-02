import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useFindProjectQuery } from "../../../app/services/api";
import { selectCurrentUser } from "../../../app/services/Auth.slice";
import CoolTransition from "../../../components/CoolTransition";
import FullPageLoader from "../../../components/FullPageLoader";
import ProjectForm from "../../../components/ProjectForm";
import { useAppSelector } from "../../../app/hooks";
import ErrorPage from "../../../components/ErrorPage";

const EditProject: NextPage = () => {
  const router = useRouter();
  const projectId = router.query.projectId as string;

  let { user, isFetching } = useAppSelector(selectCurrentUser);

  const { isLoading, data: project } = useFindProjectQuery(projectId, {
    skip: !projectId,
  });
  const isCreator = project?.user === user?._id;
  if (isLoading) {
    return <FullPageLoader />;
  } else if ((!project || !isCreator) && !isFetching) {
    return <ErrorPage />;
  } else {
    return (
      <CoolTransition>
        <ProjectForm label="Update Project" isUpdate project={project} />
      </CoolTransition>
    );
  }
};

export default EditProject;
