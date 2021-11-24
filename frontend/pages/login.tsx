
import React from "react";
import Layout from "../src/Layout";
import LoginForm from "../src/LoginForm";
import FormCard from "../src/FormCard";

const Login: React.FC = () => {

    return (
      <Layout> 
               <FormCard formTitle="Login to Crowfund">
                <LoginForm />
               </FormCard>
      </Layout>
    );
  };
  
  export default Login;