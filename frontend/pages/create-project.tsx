import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CardContainer from "../components/CardContainer";
import InputField from "../components/InputField";
import Layout from "../components/Layout";

interface IProjectInput {
  title: string;
  description: string;
  dueDate: Date;
  pledgeGoal: number;
}

const CreateProject: React.FC = () => {
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const handleSetStartDate = (date: Date) => {
    setStartDate(date);
  };

  const initalValues: IProjectInput = {
    title: "",
    description: "",
    dueDate: new Date(),
    pledgeGoal: 1000,
  };
  return (
    <Layout>
      <CardContainer>
        <Center>
          <Heading>Create Project</Heading>
        </Center>
        <Box my={8} textAlign="left">
          <Formik
            initialValues={initalValues}
            onSubmit={(values) => console.log(values)}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <InputField
                  type="text"
                  limit={50}
                  name="title"
                  label="Project Title"
                  helperText="Can be changed later"
                />

                <InputField
                  type="text"
                  name="description"
                  label="Describe your project"
                  helperText="Can be changed later"
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
                    <FormLabel htmlFor="published-date">
                      Choose due date
                    </FormLabel>
                    <DatePicker
                      selected={startDate}
                      allowSameDay={false}
                      minDate={new Date()}
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
    </Layout>
  );
};

export default CreateProject;
