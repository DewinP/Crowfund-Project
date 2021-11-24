import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import CardContainer from "../components/CardContainer";
import Layout, { MotionBox } from "../components/Layout";
import SignupForm from "../components/SignupForm";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}



const Signup: React.FC = () => {
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
        <Box textAlign="center">
          <Heading>Signup</Heading>
        </Box>
        <SignupForm />
      </CardContainer>
      </MotionBox>
    </Layout>
  );
};

export default Signup;
