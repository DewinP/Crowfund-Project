import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useFindAllPledgesByProjectQuery,
  useUpdateProjectMutation,
} from "../app/services/api";
import CardContainer from "../components/CardContainer";
import InputField from "../components/InputField";
import { IProject, IProjectInput } from "../intefaces";
import { toErrorMap } from "../utils/toErrorMap";
import PickerDateField from "./PickerDateField";

interface IProjectFormProps {
  project?: IProject;
  label: string;
  isUpdate?: boolean;
}

const ProjectForm: React.FC<IProjectFormProps> = ({ label, project }) => {
  const monthFromNow = new Date(dayjs().add(1, "month").format("YYYY-MM-DD"));
  const { isLoading: isLoadingPledges, data: pledges } =
    useFindAllPledgesByProjectQuery(
      { projectId: project?._id },
      { skip: !project?._id }
    );

  console.log(pledges);

  const router = useRouter();
  const initalValues: IProjectInput = {
    name: project?.name || "",
    description: project?.description || "",
    dueDate: project?.dueDate ? new Date(project?.dueDate) : monthFromNow,
    pledgeGoal: project?.pledgeGoal || 1000,
  };

  const [createProject] = useCreateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();
  const [updateProject] = useUpdateProjectMutation();
  return (
    <CardContainer>
      <Center>
        <Heading>{label}</Heading>
      </Center>
      <Box mt={8} textAlign="left">
        <Formik
          initialValues={initalValues}
          onSubmit={async (values, { setErrors }) => {
            try {
              if (!project) {
                const projectId = await createProject(values).unwrap();
                router.push(`projects/${projectId}`);
              } else {
                const p = await updateProject({
                  ...values,
                  _id: project?._id,
                }).unwrap();
                router.push(`/projects/${p._id}`);
              }
            } catch (error) {
              if (error.status === 400) {
                setErrors(toErrorMap(error.data));
              }
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                type="text"
                name="name"
                label="Project Name"
                helperText="Limit: 50 chars"
              />

              <InputField
                type="text"
                name="description"
                label="Describe your project"
                textArea
              />
              <Flex flexDir={{ base: "column", md: "row" }}>
                <InputField
                  type="number"
                  name="pledgeGoal"
                  label="Funding Goal"
                  marginRight={{ md: 6 }}
                  min={1000}
                  isDisabled={!!project}
                  helperText="Minimum: 1000"
                />
                <PickerDateField
                  name="dueDate"
                  minDate={initalValues.dueDate}
                  label="Due Date"
                  allowSameDay={false}
                />
              </Flex>
              <Button onClick={() => router.back()} width="full" mt={2}>
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
                width="full"
                mt={2}
              >
                {project ? "Update Project" : "Create Project"}
              </Button>
              {project && !pledges?.length && (
                <Button
                  onClick={async () => {
                    deleteProject({ projectId: project?._id }).unwrap();
                    router.back();
                  }}
                  colorScheme="red"
                  width="full"
                  mt={2}
                >
                  Delete Project
                </Button>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </CardContainer>
  );
};

export default ProjectForm;
