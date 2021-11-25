import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import CardContainer from "../components/CardContainer";
import Layout, { MotionBox } from "../components/Layout";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const Login: React.FC = () => {
  const router = useRouter();
  let { isLoggedIn } = useAppSelector(selectCurrentUser);
  React.useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);
  return (
    <Layout>
      <MotionBox
        variants={variants}
        initial="hidden" 
        animate="enter" 
        exit="exit" 
        transition={{ duration: "0.4" }}
      >
      <CardContainer>
        <Box textAlign="center" >
          <Heading>Login into DSP</Heading>
        </Box>
        <LoginForm />
      </CardContainer>
      </MotionBox>
    </Layout>
  );
};

export default Login;
