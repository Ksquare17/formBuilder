import { UserNav } from '../../../components/UserNav';
import React from 'react'
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
// components


const UserAbout = () => {
  return (  
    <>
    <UserNav/>
   
    <Grid container spacing={0}   
    sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        py: 10,
        px: 2,
    }}
    >
        <Grid item xs={12} sm={12} md={5}
        component = 'section'
        >
            <Typography
           
            textAlign={'start'}
            >What we are offering?</Typography>

            <Typography 
            variant='h6'
            component='h4' 
            sx = {{
                fontWeight: '400',
                paddingTop: 1,
            }}
            >
                Property facilities
            </Typography>

            <Typography 
           
            maxWidth = {'75%'}
            mx={0}
            textAlign={'start'}
            > We have more 5000 reviews
            and our customers trust on out quality
            product and trust own our product.</Typography>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
            <Card 
            square={ true }
            sx={{
                minHeight: 200,
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid #ccc',
            }}>
                <CardContent>
                    <IconButton>
                        <SportsGymnasticsIcon 
                        fontSize="large"
                        color="primary" />
                    </IconButton>
                    <Typography 
                    variant="h5" 
                    component="p"
                    sx={{
                        fontWeight: 700,
                        textTransform: 'capitalize',
                    }}
                    >
                    gym
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card 
            square={ true }
            sx={{ 
                minHeight: 200,
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center', 
                border: '1px solid #ccc'
            }}>
                <CardContent>
                    <IconButton>
                        <LocalParkingIcon 
                        fontSize="large"
                        color="primary" />
                    </IconButton>
                    <Typography 
                    variant="h5" 
                    component="p"
                    sx={{
                        fontWeight: 700,
                        textTransform: 'capitalize',
                    }}
                    >
                    parking
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={2}
        sx={{
            display: {xs: 'none', sm: 'block'},
        }}  
        >
            <Card 
            square={ true }
            sx={{ 
                boxShadow: 'none',
                minHeight: 180,
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <CardContent>
                    <ArrowCircleRightRoundedIcon
                    fontSize="large"
                    color="primary" />
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>    
            <Card 
            square={ true }
            sx={{ 
                minHeight: 200,
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center', 
                border: '1px solid #ccc'
            }}>
                <CardContent>
                    <IconButton>
                        <FastfoodOutlinedIcon
                        fontSize="large"
                        color="primary" />
                    </IconButton>
                    <Typography 
                    variant="h5" 
                    component="p"
                    sx={{
                        fontWeight: 700,
                        textTransform: 'capitalize',
                    }}
                    >
                    local dining
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card 
            square={ true }
            sx={{ 
                minHeight: 200,
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',                    
                border: '1px solid #ccc',
            }}
            >
                <CardContent>
                    <IconButton>
                        <PoolOutlinedIcon 
                        fontSize="large"
                        color="primary" />
                    </IconButton>
                    <Typography 
                    variant="h5" 
                    component="p"
                    sx={{
                        fontWeight: 700,
                        textTransform: 'capitalize',
                    }}
                    >
                    swimming pool
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Card 
            square={ true }
            sx={{ 
                minHeight: 200,
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center', 
                border: '1px solid #ccc',
            }}>
                <CardContent>
                    <IconButton>
                        <WifiPasswordIcon
                        fontSize="large"
                        color="primary" />
                    </IconButton>
                    <Typography 
                    variant="h5" 
                    component="p"
                    sx={{
                        fontWeight: 700,
                        textTransform: 'capitalize',
                    }}
                    >
                    Internet
                    </Typography>
                </CardContent>
            </Card>
        </Grid> 
    </Grid>
    </>  
);
};

export { UserAbout };
