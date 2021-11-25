import { Box, Link as ChakraLink, Stack } from "@chakra-ui/layout";
import { Button, Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSignupUserMutation } from "../app/services/api";
import { ISignupInput } from "../intefaces";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [singupUser] = useSignupUserMutation();
  const initialValues: ISignupInput = {
    email: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
  };
  return (
    <Box my={8} textAlign="left">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          try {
            await singupUser(values).unwrap();
            router.push("/login");
          } catch (error) {
            console.log(error.data);
            if (error.status === 400) {
              setErrors(toErrorMap(error.data));
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex flexDir={{ base: "column", md: "row" }}>
              <InputField
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First name"
                marginRight={{ md: 6 }}
              />
              <InputField
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last name"
              />
            </Flex>

            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Email Address"
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
            />

            <InputField
              label="Confirm Password"
              type="password"
              name="passwordConfirmation"
              placeholder="Re-enter password"
            />

            <Stack isInline justifyContent="right" mt={4}>
              <Link href="/login">
                <Box>
                  <ChakraLink color="teal.800">Login instead?</ChakraLink>
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
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignupForm;
