import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, YouTube, Mail } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              FinWayZ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering your financial journey
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" component="p">
              123 Finance Street, Mumbai, India
            </Typography>
            <Typography variant="body2" component="p">
              Email: support@finwayz.com
            </Typography>
            <Typography variant="body2" component="p">
              Phone: +91 3452788965
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">FAQs</Link>
            <Link href="#" color="inherit" display="block">Terms of Service</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <IconButton aria-label="Facebook" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton aria-label="YouTube" color="inherit">
              <YouTube />
            </IconButton>
            <IconButton aria-label="Email" color="inherit">
              <Mail />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2023 FinWayZ. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
