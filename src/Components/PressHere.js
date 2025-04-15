import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function PressHere() {
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen bg-no-repeat bg-center bg-[length:100%_130%] font-turret' style={{ backgroundImage: "url('/pics/bkg1.png')" }}>
        <img src="/pics/logo.png" alt="logo" className='relative top-[100px] left-[570px] h-[120px] w-[140px]'/>  
        <img src="/pics/brd1.png" alt="border" className='relative top-[120px] left-[400px] h-[140px] w-[520px] bg-transparent'/>  
        <div className='relative top-[0px] left-[400px] w-[500px] text-center font-bold text-[20px] text-white'>
          Votre atelier de confiance pour la mécanique générale, l'électricité auto,
           la tôlerie-peinture <br/> et le pneumatique
        </div>
        <button className='relative top-[50px] left-[565px] w-[170px] h-[50px] rounded-[10px] font-[Turret_Road] font-bold text-white text-[15px] shadow-[5px_5px_0px_white] bg-gradient-to-r from-red-900 via-red-500 to-red-900' onClick={() => navigate("/Acceuil")}><b style={{ color: "white" }}>Press here</b></button>
    </div>
  )
}
