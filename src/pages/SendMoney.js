import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
}));

function SendMoney() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Send Money
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="recipient"
              name="recipient"
              label="Recipient's Email or Phone"
              fullWidth
              autoComplete="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="amount"
              name="amount"
              label="Amount"
              fullWidth
              autoComplete="off"
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="note"
              name="note"
              label="Add a note (optional)"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <GradientButton
              type="submit"
              fullWidth
              variant="contained"
              size="large"
            >
              Send Money
            </GradientButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SendMoney;
