
import { createTheme } from '@mui/material/styles';
import purple  from '@mui/material/colors/purple';
import white  from '@mui/material/colors/white';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[600],
    },
    secondary: {
      main: white[50],
    },
  },
});

const navbar = createTheme({
  palette:{
    primary:{
      main: white[50],
    },
    secondary:{
      main:purple[600],
    }
  }
});