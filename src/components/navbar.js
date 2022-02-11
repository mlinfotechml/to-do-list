import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navbar = () => {
  return (
    <div>
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar variant="dense" style={{background:'purple'}}>
          <Typography variant="h6" color="inherit" component="div" style={{margin:'0 auto'}}>
            ToDo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default navbar