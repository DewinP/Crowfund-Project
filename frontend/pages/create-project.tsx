import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import CoolTransition from "../components/CoolTransition";
import ProjectForm from "../components/ProjectForm";
const CreateProject: React.FC = () => {
  return (
    <CoolTransition>
      <ProjectForm label="Create Project" />
    </CoolTransition>
  );
};

export default CreateProject;
