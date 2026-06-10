import { createTheme } from '@mui/material/styles';

// This function generates the MUI theme dynamically based on whether dark or light mode is selected.
// However, to align perfectly with our CSS variables, we configure MUI colors to reference 
// our CSS variables directly. This allows theme changes to apply instantly.
export const createAppTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#8b5cf6' : '#6366f1',
        contrastText: '#ffffff',
      },
      secondary: {
        main: mode === 'dark' ? '#06b6d4' : '#0891b2',
        contrastText: '#ffffff',
      },
      background: {
        default: 'transparent',
        paper: mode === 'dark' ? 'rgba(30, 32, 50, 0.45)' : 'rgba(255, 255, 255, 0.65)',
      },
      text: {
        primary: mode === 'dark' ? '#f8fafc' : '#0f172a',
        secondary: mode === 'dark' ? '#94a3b8' : '#475569',
      },
      success: {
        main: '#10b981',
      },
      warning: {
        main: '#f59e0b',
      },
      error: {
        main: '#ef4444',
      },
      divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(99, 102, 241, 0.12)',
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h1: {
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
      },
      h2: {
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
      },
      h3: {
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
      },
      h4: {
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
      },
      h5: {
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
      },
      h6: {
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 500,
      },
      button: {
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            borderRadius: 16,
            border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(99, 102, 241, 0.12)'}`,
            boxShadow: `0 8px 32px 0 ${mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(15, 23, 42, 0.04)'}`,
            backdropFilter: 'blur(14px)',
            transition: 'all 0.2s ease-in-out',
            overflow: 'hidden',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? 'rgba(26, 28, 46, 0.9)' : 'rgba(255, 255, 255, 0.95)',
            backgroundImage: 'none',
            border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(99, 102, 241, 0.12)'}`,
            backdropFilter: 'blur(14px)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '8px 16px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          outlined: {
            borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(99, 102, 241, 0.2)',
            color: mode === 'dark' ? '#f8fafc' : '#0f172a',
            '&:hover': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(99, 102, 241, 0.4)',
              backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(99, 102, 241, 0.04)',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 10,
              backgroundColor: mode === 'dark' ? 'rgba(15, 16, 28, 0.4)' : 'rgba(255, 255, 255, 0.5)',
              transition: 'all 0.2s',
              '& fieldset': {
                borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(99, 102, 241, 0.12)',
              },
              '&:hover fieldset': {
                borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.18)' : 'rgba(99, 102, 241, 0.25)',
              },
              '&.Mui-focused fieldset': {
                borderColor: mode === 'dark' ? '#8b5cf6' : '#6366f1',
                borderWidth: 1.5,
              },
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            backgroundColor: mode === 'dark' ? 'rgba(15, 16, 28, 0.4)' : 'rgba(255, 255, 255, 0.5)',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(99, 102, 241, 0.12)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.18)' : 'rgba(99, 102, 241, 0.25)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: mode === 'dark' ? '#8b5cf6' : '#6366f1',
              borderWidth: 1.5,
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(99, 102, 241, 0.08)'}`,
            padding: '16px',
            color: mode === 'dark' ? '#cbd5e1' : '#334155',
          },
          head: {
            color: mode === 'dark' ? '#f8fafc' : '#0f172a',
            fontWeight: 600,
            backgroundColor: mode === 'dark' ? 'rgba(15, 16, 28, 0.5)' : 'rgba(99, 102, 241, 0.04)',
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(99, 102, 241, 0.12)'}`,
            backgroundColor: mode === 'dark' ? 'rgba(17, 18, 30, 0.45)' : 'rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(14px)',
          },
        },
      },
    },
  });
};
