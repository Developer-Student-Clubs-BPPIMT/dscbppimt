import { createMuiTheme } from '@material-ui/core/styles';
import { red, blue, lightBlue } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main : lightBlue.A400,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F5F5F5',
    },
  },
});

export default theme;
