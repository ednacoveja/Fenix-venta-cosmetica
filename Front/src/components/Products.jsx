import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import Navbar from './Navbar';


export default function Products() {
  return (
    <body>
      <Navbar />
      <Box sx={{ flexGrow: 1 }} padding={10} style={{ backgroundColor: "black" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <Product />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <Product />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <Product />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <Product />
          </Grid>
        </Grid>
      </Box>
    </body>
  );
}