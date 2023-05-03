import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();

    async function ALaLanding(e) {
        e.preventDefault();
        navigate("/");
    }
    async function ShoppingCart(e) {
        e.preventDefault();
        navigate("/carrito");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: "black", boxShadow: "10px 0.7px grey" }} >


                <Toolbar >
                    <Link to="/home">
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
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                        Tienda Fenix
                    </Typography>

                    <Button color="inherit" component="button" variant="outline" onClick={(e) => {
                        ALaLanding(e);
                    }}>Landing</Button>
                    <IconButton aria-label='show cart items' color="inherit">

                        <Badge badgeContent={3} color='error' max={99}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <AddShoppingCart fontSize="large" onClick={(e) => { ShoppingCart(e) }}></AddShoppingCart>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}