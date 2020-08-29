import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/main.css'

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);



  const theme = responsiveFontSizes(createMuiTheme({
    palette: {
      // type : prefersDarkMode ? 'dark' : 'light',
      type : 'dark',
      primary: {
        main: '#1FA9E5',
      },
      secondary : {
        main : '#000000',
      }
    },
  }));
  

  return (
    <React.Fragment>
      <Head>
        <title>DSC BPPIMT</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
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
