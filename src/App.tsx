
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
import Box from '@mui/material/Box'
import { orange } from '@mui/material/colors';
function App() {


  const theme = createTheme({
      palette: {
        primary: {
          main: orange[400],
          dark: orange[900],
          contrastText: '#fff'
        },
        background:{
          default: '#f7f7f7'
        }
      }
      
  });
  return (
    <ThemeProvider theme={theme}>
    <Box width='100vw' height= '100vh' sx={{ bgcolor: 'background.default'}}>
    
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
