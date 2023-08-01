import { Button } from '@mui/material'
import accounting from 'accounting'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


export const Total = () => {

    const compra = useSelector((state) => state.carrito)
    const suma= compra.reduce((accumulator, item) => accumulator + item.price, 0);
    const compraLogin = useSelector((state) => state.userCarrito)
    const sumaLogin= compraLogin.reduce((accumulator, item) => accumulator + item.price, 0);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const clases = {
        root:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"20vh"
        },
        button:{
            marginTop:"2rem"
        }
    }
    return (
        <div style={clases.root}>
            <h5>Total items: {isLoggedIn?compraLogin.length:compra.length}</h5>
            <h5> {isLoggedIn?accounting.formatMoney(sumaLogin, "$", 0):accounting.formatMoney(suma, "$", 0)}</h5>
            <Button style={clases.button} variant="contained" color='error'>Comprar</Button>
        </div>
    )
}
