import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const transactions = [
  { id: 1, type: 'received', amount: 500, from: 'Jay Kumar', date: '2023-04-15' },
  { id: 2, type: 'sent', amount: 200, to: 'Jayesh Sharma ', date: '2023-04-14' },
  { id: 3, type: 'received', amount: 1000, from: 'Company Fastly', date: '2023-04-13' },
];

function Activity() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {transactions.map((transaction) => (
          <React.Fragment key={transaction.id}>
            <ListItem>
              <ListItemIcon>
                {transaction.type === 'received' ? <ArrowDownward color="success" /> : <ArrowUpward color="error" />}
              </ListItemIcon>
              <ListItemText
                primary={`$${transaction.amount} ${transaction.type === 'received' ? 'from' : 'to'} ${transaction.from || transaction.to}`}
                secondary={transaction.date}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}

export default Activity;
