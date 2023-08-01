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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import auth from '../firebase';
import { getUserLoged, clearCarrito } from '../redux/actions';


export default function Navbar() {

    const dispatch = useDispatch()

    const userLoged = useSelector((state) => state.UserLoged);
    const compra = useSelector((state) => state.carrito)
    const compraUser = useSelector((state) => state.userCarrito)

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if (authUser) {
                dispatch(getUserLoged(authUser.email))
            } else {
                dispatch(getUserLoged(null));
            }
        })
    }, [dispatch])


    const handleAuth = (e) => {
        e.preventDefault();
        if (userLoged) {
            auth.signOut()
            dispatch(getUserLoged(null))
            navigate("/")
        } else {
            navigate("/signin")
        }
    }

    const navigate = useNavigate();

    async function ALaHome(e) {
        e.preventDefault();
        navigate("/home");
    }
    async function ShoppingCart(e) {
        e.preventDefault();
        navigate("/carrito");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: "black", boxShadow: "10px 0.7px grey" }} >
                <Toolbar >
                    <Link to="/">
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
                    <Typography sx={{ flexGrow: 1 }} >
                        <Button color="inherit" component="button" variant="outline" onClick={(e) => {
                            ALaHome(e);
                        }}>Tienda Fenix</Button>
                    </Typography>

                    <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                        {userLoged ? `Hola ${userLoged.firstName}` : "Estás como invitado/a"}
                    </Typography>
                    <Typography >
                        <Button color="inherit" component="button" variant="outline" onClick={(e) => {
                            handleAuth(e)
                        }}>{userLoged ? "Sign-Up" : "Sign-In"}</Button>
                    </Typography>


                    <IconButton aria-label='show cart items' color="inherit">

                        <Badge badgeContent={userLoged?compraUser.length:compra.length} color='error' max={99}
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