import { Box } from "@chakra-ui/layout";
import { Button, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React from "react";
import { IComment, ICommentInput } from "../intefaces";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";

const CommentForm: React.FC<{ comment?: IComment; isBacker?: boolean }> = ({
  comment,
  isBacker,
}) => {
  const initialValues: ICommentInput = {
    body: comment?.body || "",
    projectId: comment?.project || "",
  };
  return (
    <Box textAlign="left">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {}}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField textArea label="Add Commnet" type="text" name="body" />

            <Flex justify="flex-end">
              <Button
                alignSelf="right"
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
                mt={1}
              >
                Add comment
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CommentForm;
