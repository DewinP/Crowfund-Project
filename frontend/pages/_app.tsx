import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <AnimatePresence>
        <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
