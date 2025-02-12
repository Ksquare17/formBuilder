import { UserNav } from '../../../components/UserNav';

import React from 'react'
import {  
    Box,
    Button,
    Stack,
    TextField,
    Typography
} from '@mui/material'


const UserContact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            phone: data.get('phone'),
        });
    }


    return (
      <>
      <UserNav/>
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
           <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: 'center',
   }}
    >
      Interested to buy property
    </Typography>
    <Typography
    sx={{
      maxWidth: 'sm',
      mx: 0,
      textAlign: 'center',
      py: 3,
      color: '#7b7b7b',
    }}
    >
    If you are interested to buy the property contact us we will call you. \
    Shortly to fulfill you requirements and property.
    </Typography>
            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    send
                </Button>
            </Box>
        </Stack>
        </>
    )
}

export default UserContact;
