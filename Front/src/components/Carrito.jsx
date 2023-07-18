import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Total } from './Total';
import Product from './Product';
import Navbar from './Navbar';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProductos } from '../redux/actions';


export default function Carrito() {
    const dispatch = useDispatch();
    const compra = useSelector((state) => state.carrito)

    useEffect(() => {
        dispatch(getProductos());
    }, [dispatch]);


    function FormRow() {
        return (
            <React.Fragment>

                {compra && compra.map((p) => {
                    return (
                        <Grid item xs={12} sm={8} md={6} lg={6}>
                            <Product id={p.id} name={p.name} rating={p.rating} price={p.price} description={p.description} image={p.image} type={p.type} />
                        </Grid>
                    )
                })}

            </React.Fragment>
        )
    }
    return (
        <body>
            <Navbar />

            <Box sx={{ flexGrow: 1 }} padding={8} style={{ backgroundColor: "black" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography align="center" gutterBottom variant="h4" color={'white'}>
                            Shopping Cart
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9} container spacing={2}>
                        <FormRow />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} >
                        <Typography align="center" gutterBottom variant="h4" color={'white'}>
                            <Total></Total>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </body>
    );
}