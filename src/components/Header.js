import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FinWayZ
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/activity">Activity</Button>
          <Button color="inherit" component={Link} to="/send-money">Send Money</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
