import { Card, CardContent, CardActionArea, Typography, Box } from '@mui/material';
import PlusIcon from '../../assets/plusIcon.svg';
import React from 'react';

const NewCard = ({ handleClick }) => (
  <Card
    sx={{
      boxShadow: 3,
      padding: '16px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      width: '250px',
      height: '350px',
    }}
    onClick={handleClick}
  >
    <CardActionArea>
      <CardContent>
        <Box
          component="img"
          src={PlusIcon}
          alt="+"
          sx={{
            width: '50px',
            height: '50px',
            marginBottom: '16px',
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: '500' }}>
          New Form
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export { NewCard };
