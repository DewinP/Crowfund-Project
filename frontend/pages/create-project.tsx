import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCreateProjectMutation } from "../app/services/api";
import CardContainer from "../components/CardContainer";
import CoolTransition from "../components/CoolTransition";
import InputField from "../components/InputField";
import { IProjectInput } from "../intefaces";
import { toErrorMap } from "../utils/toErrorMap";

const CreateProject: React.FC = () => {
  const monthFromNow = new Date(dayjs().add(1, "month").format("YYYY-MM-DD"));
  const [startDate, setStartDate] = React.useState<Date>(monthFromNow);

  const handleSetStartDate = (date: Date) => {
    setStartDate(date);
  };
  const router = useRouter();
  const [createProject] = useCreateProjectMutation();
  const initalValues: IProjectInput = {
    name: "",
    description: "",
    dueDate: monthFromNow,
    pledgeGoal: 1000,
  };
  return (
    <CoolTransition>
      <CardContainer>
        <Center>
          <Heading>Create Project</Heading>
        </Center>
        <Box my={8} textAlign="left">
          <Formik
            initialValues={initalValues}
            onSubmit={async (values, { setErrors }) => {
              try {
                const projectId = await createProject(values).unwrap();
                router.push(`projects/${projectId}`);
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
                    helperText="Minimum: 1000"
                  />
                  <FormControl mt={4}>
                    <FormLabel htmlFor="dueDate">Choose due date</FormLabel>
                    <DatePicker
                      selected={startDate}
                      allowSameDay={false}
                      minDate={monthFromNow}
                      name="dueDate"
                      onChange={(val: Date) => {
                        handleSetStartDate(val);
                      }}
                    />
                  </FormControl>
                </Flex>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  colorScheme="teal"
                  width="full"
                  mt={4}
                >
                  Create Project
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </CardContainer>
    </CoolTransition>
  );
};

export default CreateProject;
