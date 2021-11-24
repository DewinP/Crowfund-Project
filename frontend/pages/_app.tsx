import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../src/theme';
import { store } from '../app/store';
import { Provider } from 'react-redux';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>Next App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}
