import { Box, Link as ChakraLink, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useLoginUserMutation } from "../app/services/api";
import { ILoginInput } from "../intefaces";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [loginUser] = useLoginUserMutation();
  const initialValues: ILoginInput = {
    email: "",
    password: "",
  };
  return (
    <Box my={8} textAlign="left">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          try {
            const { accessToken, refreshToken } = await loginUser(
              values
            ).unwrap();

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            router.push("/");
          } catch (error) {
            if (error.status === 400) {
              setErrors(toErrorMap(error.data));
            }
            if (error.status === 401) {
              setErrors({
                email: "Invalid email or password",
                password: "Invalid email or password",
              });
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField type="text" name="email" label="Email" />

            <InputField type="password" name="password" label="Password" />

            <Stack isInline justifyContent="right" mt={4}>
              <Link href="/signup">
                <Box>
                  <ChakraLink color={`teal.800`}>
                    Not registered? Signup instead!
                  </ChakraLink>
                </Box>
              </Link>
            </Stack>

            <Button
              type="submit"
              isLoading={isSubmitting}
              colorScheme="teal"
              width="full"
              mt={4}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
