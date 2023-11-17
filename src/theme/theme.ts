import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1fc7d4',
      dark: '#c226d0',
      light: '#D1FCF1',
    },
    secondary: {
      main: '#c226d0',
      dark: '#2a028e',
      light: '#6935c9',
    },
    background: {
      default: '#181d27',
      paper: '#181d2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    error: {
      main: '#b52422',
    },
    divider: '#1e2431',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #000 0%, #181d2a 100%)',
        },
      },
    },
  },
});

export default theme;
