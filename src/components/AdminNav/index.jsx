import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import HeaderLogo from '../../assets/headerLogo.svg';

const AdminNav = ({ title = 'USER Feedback', onPublish = null, onSave = null }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={HeaderLogo} alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
          <Typography variant="h6" sx={{ fontWeight: '500', color: 'black' }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {onSave && (
            <Button
              onClick={onSave}
              variant="contained"
              sx={{ backgroundColor: '#1976d2', color: 'white' }}
            >
              Save
            </Button>
          )}
          {onPublish && (
            <Button
              onClick={onPublish}
              variant="contained"
              sx={{ backgroundColor: '#2E7D32', color: 'white' }}
            >
              Publish
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { AdminNav };
