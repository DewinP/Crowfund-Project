import React from "react";
import FormCard from "../src/FormCard";
import Layout from "../src/Layout";
import SignupForm from "../src/SignupForm";

const Signup: React.FC = () => {
    
    return (
      <Layout> 
               <FormCard formTitle="Join Crowfund">
                <SignupForm />
               </FormCard>
      </Layout>
    );
  };
  
  export default Signup;