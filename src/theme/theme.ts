import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1fc7d4',
      dark: '#169DB6',
      light: '#52E5E3',
    },
    secondary: {
      main: '#c226d0',
      dark: '#9A1BB2',
      light: '#E257E2',
    },
    background: {
      default: '#07090D',
      paper: '#181d2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#95A5C6',
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
          background:
            'linear-gradient(180deg, #07090D 40%, #0F121A 60%, #181d2a 100%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '.6rem 1.2rem',
          borderRadius: '1.5rem',
          fontWeight: 'bold',
        },
        disabled: {
          opacity: 0.5,
        },
      },
    },
  },
});

export default theme;
