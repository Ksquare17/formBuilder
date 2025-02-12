import React from 'react';
import { UserNav } from '../../../components/UserNav';
import { Box, Button, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import headerImg from '../../../assets/image02.png'
const UserHome = () => {
 
  const CustomBox = styled(Box) (({ theme }) => ({
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',

    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),

    backgroundColor: '#0091ff',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    }
}));

const BoxText = styled(Box) (({ theme }) => ({
    flex: '1',
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
        flex: '2',
        textAlign: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));


return  (
  <>
  <UserNav/>

    <CustomBox >
        {/*  Box text  */}
        <BoxText 
        
        >
            <Typography
            variant='h2'
            component= 'h1'
            sx={{
                fontWeight: 700,
                color: '#fff',
            }}
            >
                We will build house of your dream
            </Typography>

            <Typography
        
            component='p'
            sx={{
                py: 3,
                lineHeight: 1.6,
                color: '#fff',
            }}
            >
                We have 9000 more review and our customers
                trust on out property and quality products.
            </Typography>

            <Box>
                <Button 
                variant='contained'
                sx={{
                    mr: 2,
                    px: 4, 
                    py: 1,
                    fontSize: '0.9rem',
                    textTransform: 'capitalize',
                    borderRadius: 0,
                    borderColor: '#14192d',
                    color: '#fff',
                    backgroundColor: 'orange',
                    "&&:hover": {
                        backgroundColor: "#343a55"
                    },
                    "&&:focus": {
                        backgroundColor: "#343a55"
                    }
                }}
                >
                    buy now
                </Button>
                <Button 
                component={Link} 
                to={'/about'}
                variant='outlined'
                sx={{
                    px: 4, 
                    py: 1,
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    borderRadius: 0,
                    color: '#fff',
                    backgroundColor: 'transparent',
                    borderColor: '#fff',
                    "&&:hover": {
                        color: '#343a55',
                        borderColor: '#343a55',
                    },
                    "&&:focus": {
                        color: '#343a55',
                        borderColor: '#343a55',
                    }
                }}
                >
                    explore
                </Button>
            </Box>
        </BoxText>

        <Box sx={theme => ({
            [theme.breakpoints.down('md')]:{
                flex: '1',
                paddingTop: '30px',
                alignSelf: 'center',
            },
            [theme.breakpoints.up('md')]:{
                flex: '2',
                alignSelf: 'flex-end',
            },
        })}
        >
            <img
            src={headerImg}
            alt="headerImg"
            style={{ 
                width: "100%", 
                marginBottom: -15,
            }}
            />
        </Box>

    </CustomBox>
    </>
)
};

export { UserHome };
