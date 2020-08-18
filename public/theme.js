import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1FA9E5',
    },
    textPrimary : {
      main : "#000",
    },
    textSecondary: {
      main : "#FFF",
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
