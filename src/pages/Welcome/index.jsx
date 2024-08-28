import React from 'react';
import { Button, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../../utils/PageRoutes';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = (userType) => {
    if (userType === 'admin') {
      navigate(PageRoutes.dashboard);
     
    } else if (userType === 'user') {
      navigate(PageRoutes.userDashboard);
     
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
   
    >
      <Card elevation={3}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleLogin('admin')}
              fullWidth
            >
              Admin View
            </Button>
          </Grid>
          <Grid >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleLogin('user')}
              fullWidth
            >
              User View
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export { Welcome };
