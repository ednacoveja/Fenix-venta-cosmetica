import './Landing.css'
import React from 'react'
import { useNavigate } from "react-router-dom";


export const Landing = () => {

    const navigate = useNavigate();

    async function ALaHome(e) {
        e.preventDefault();
        navigate("/home");
    }

    return (
        <div className='landing'>
            <div className='landArribaCont'>
                <div className='logo'>
                    Emprendimiento Artesanal 
                </div>
                <div >
                    <button className='btnCreCu' onClick={(e) => ALaHome(e)}>Tienda Online</button>
                </div>
            </div>
            <div className='landArribaCont'>
                <div >
                </div>
                <div >
                    <button className='btnCreCu' onClick={(e) => ALaHome(e)}>Crear Cuenta</button>
                </div>
            </div>
            <div className='landArribaCont'>
                <div></div>
                <div >
                    <button className='btnCreCu' onClick={(e) => ALaHome(e)}>Ingresar</button>
                </div>
            </div>

        </div>

    )
}
