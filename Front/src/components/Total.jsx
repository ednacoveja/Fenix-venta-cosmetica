import { Button } from '@mui/material'
import accounting from 'accounting'
import React from 'react'
export const Total = () => {
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
            <h5>Total items: 3</h5>
            <h5> {accounting.formatMoney(2000, "$", 0)}</h5>
            <Button style={clases.button} variant="contained" color='error'>Comprar</Button>
        </div>
    )
}
