import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import CardContainer from "../components/CardContainer";
import CoolTransition from "../components/CoolTransition";
import SignupForm from "../components/SignupForm";

const Signup: React.FC = () => {
  return (
    <CoolTransition>
      <CardContainer>
        <Box textAlign="center">
          <Heading>Signup</Heading>
        </Box>
        <SignupForm />
      </CardContainer>
    </CoolTransition>
  );
};

export default Signup;
