import React from 'react';
import './Fpage.css';
import { useNavigate } from 'react-router-dom';

export default function Fpage() {
    const navigate = useNavigate();
  return (
    <div className='full-page'>
        <img src="/pics/logo.png" alt="logo" className='logo'/>  
        <img src="/pics/brd1.png" alt="border" className='brd1'/>  
        <div className='div1' style={{ color: "white" }}>
          Votre atelier de confiance pour la mécanique générale, l'électricité auto,
           la tôlerie-peinture <br/> et le pneumatique
        </div>
        <button className='btn1' onClick={() => navigate("/Navbar")}><b style={{ color: "white" }}>Press here</b></button>
    </div>
  )
}
