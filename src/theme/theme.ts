import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3c35f2',
      dark: '#c226d0',
      light: '#6c66f7',
    },
    secondary: {
      main: '#3703a6',
      dark: '#2a028e',
      light: '#6935c9',
    },
    background: {
      default: '#181d27',
      paper: '#666',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    error: {
      main: '#b52422',
    },
  },
});

export default theme;
