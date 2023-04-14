import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge, Link } from '@mui/material';



export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: "black" }} >
                <Toolbar >
                    <Link to="/" />
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0 }}
                    >
                        <img
                            width={"30px"}
                            src={'images/logoRedondo.png'}
                            alt="Logo"
                        />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                        Tienda Fenix
                    </Typography>
                    <Button color="inherit" component="div">Logout</Button>
                    <IconButton aria-label='show cart items' color="inherit">

                        <Badge badgeContent={3} color='error' max={99}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}

                        >
                            <AddShoppingCart fontSize="large" ></AddShoppingCart>
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}