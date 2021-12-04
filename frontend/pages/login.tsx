import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import CardContainer from "../components/CardContainer";
import CoolTransition from "../components/CoolTransition";
import LoginForm from "../components/LoginForm";

const Login: NextPage = () => {
  const router = useRouter();
  let { isLoggedIn } = useAppSelector(selectCurrentUser);
  React.useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);
  return (
    <CoolTransition>
      <CardContainer>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <LoginForm />
      </CardContainer>
    </CoolTransition>
  );
};

export default Login;
