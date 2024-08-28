import { Link } from 'react-router-dom';
import { ShowUserFormModal } from '../ShowUserFormModal';
import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu


const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));
const itemList = [
  {
    text: "Home",
    to: "/home" 
  },
  {
    text: "About",
    to: "/about"
  },
  {
      text: "Contact",
      to: "/contact"
  }
];
const UserNav = () => {
  return (
    <>
      <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: '#0091ff', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Typography
                variant="h6"
                component="h2"

                >
                   Real Estate
                </Typography>
                
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
      <ShowUserFormModal />
    </>
  );
};

export { UserNav };
