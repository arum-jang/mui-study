import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#2196F3',
        light: '#64B5F6',
        dark: '#1976D2',
      },
      background: {
        default: '#F5F5F5',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#2C3E50',
        secondary: '#7F8C8D',
      },
    },
    typography: {
      fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif",
      h6: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '8px 16px',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
      },
    },
  });
