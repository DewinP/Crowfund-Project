import { Box, Center, Heading } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import CardContainer from "../components/CardContainer";
import InputField from "../components/InputField";
import Layout from "../components/Layout";

const CreateProject: React.FC = () => {
  return (
    <Layout>
      <CardContainer>
        <Center>
          <Heading>Create Project</Heading>
        </Center>
        <Box my={8} textAlign="left">
          <Formik initialValues={null} onSubmit={() => console.log("hello")}>
            {() => (
              <Form>
                <InputField type="text" name="title" label="Project Title" />

                <InputField
                  type="text"
                  name="description"
                  label="Describe your project"
                  helperText="You can change this later"
                />
                <InputField
                  type="number"
                  name="pledgeGoal"
                  label="Funding Goal"
                />
                <InputField
                  type="date"
                  name="dueDate"
                  label="Choose Due Date"
                />
              </Form>
            )}
          </Formik>
        </Box>
      </CardContainer>
    </Layout>
  );
};

export default CreateProject;
