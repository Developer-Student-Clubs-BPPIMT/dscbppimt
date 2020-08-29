import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/main.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useDarkMode from 'use-dark-mode'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const darkMode = useDarkMode();
  const lightTheme = responsiveFontSizes(createMuiTheme({
    palette: {
      type : 'light',
      primary: {
        main: '#1FA9E5',
      },
      secondary : {
        main : '#fff',
      },
    },
  }));
  const darkTheme = responsiveFontSizes(createMuiTheme({
    palette: {
      type : 'dark',
      primary: {
        main: '#1FA9E5',
      },
      secondary : {
        main : '#000',
      },
    },
  }));
  

  return (
    <React.Fragment>
      <Head>
        <title>DSC BPPIMT</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
