import { ChakraProvider } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Layout from "../components/Layout";
import PrivateRoutes from "../components/PrivateRoutes";
import "../styles/DatePicker.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const protectedRoutes = [
    "/pledges",
    "/create-project",
    `/projects/${router.query.projectId}/success`,
    "/projects/me",
  ];
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <AnimatePresence>
            <PrivateRoutes protectedRoutes={protectedRoutes}>
              <Component {...pageProps} />
            </PrivateRoutes>
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
