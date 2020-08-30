import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const typography = {
  fontFamily: 'Google Sans',
  h5:{
    letterSpacing: .6,
  },
  h6:{
    letterSpacing: .8,
  },
  subtitle1:{
    letterSpacing: .6,
  }
}


export const lightTheme = responsiveFontSizes(createMuiTheme({
    typography: {...typography},
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
export const darkTheme = responsiveFontSizes(createMuiTheme({
    typography: {...typography},
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