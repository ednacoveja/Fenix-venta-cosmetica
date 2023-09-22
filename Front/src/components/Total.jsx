import { Button, Link } from '@mui/material'
import accounting from 'accounting'
import React from 'react'
import { useSelector } from 'react-redux';


export const Total = () => {

    const compra = useSelector((state) => state.carrito)
    const suma = compra.reduce((accumulator, item) => accumulator + item.price, 0);
    const compraLogin = useSelector((state) => state.userCarrito)
    const sumaLogin = compraLogin.reduce((accumulator, item) => accumulator + item.price, 0);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const clases = {
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh"
        },
        button: {
            marginTop: "2rem"
        }
    }
    function finalizarCompra() {

        window.location.href = 'https://wa.me/543876305279'

    }
    return (
        <div style={clases.root}>
            <h5>Total items: {isLoggedIn ? compraLogin.length : compra.length}</h5>
            <h5>{isLoggedIn ? accounting.formatMoney(sumaLogin, "$", 0) : accounting.formatMoney(suma, "$", 0)}</h5>
            <Button style={clases.button} variant="contained" color='error'>
                <a href="https://wa.me/543876305279" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                    Comprar
                </a>
            </Button>
        </div>
    );
}
