import { Box } from "@chakra-ui/layout";
import { Button, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React from "react";
import {
  useCreateCommentMutation,
  useUpdateCommentMutation,
} from "../app/services/api";
import { IComment, ICommentInput } from "../intefaces";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";
import { useRouter } from "next/router";

const CommentForm: React.FC<{ comment?: IComment }> = ({ comment }) => {
  const [createComment] = useCreateCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const router = useRouter();
  let projectId = router.query.projectId as string;
  const initialValues: ICommentInput = {
    body: comment?.body || "",
    projectId: comment?.project || projectId,
  };
  return (
    <Box textAlign="left">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors, resetForm }) => {
          if (!comment) {
            try {
              await createComment(values).unwrap();
              resetForm();
            } catch (error) {
              console.log(error);

              setErrors(toErrorMap(error));
            }
          } else {
            try {
              await updateComment(values).unwrap();
            } catch (error) {
              setErrors(toErrorMap(error));
            }
          }
        }}
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
                {comment ? "Update" : "Post"}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CommentForm;
