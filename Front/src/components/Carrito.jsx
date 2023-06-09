import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Total } from './Total';
import Product from './Product';
import Navbar from './Navbar';


export default function Carrito() {
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={12} sm={8} md={6} lg={6}>
                    <Product />
                </Grid>
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