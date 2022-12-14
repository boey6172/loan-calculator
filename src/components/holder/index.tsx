import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (data) => (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        Deductible Amount
      </Typography>
      <Typography variant="h5" component="div">
        {data.amount}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Remaining Balance
      </Typography>
      <Typography variant="h5" component="div"> 
      {data.remBalance}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({data}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(data)}</Card>
    </Box>
  );
}
