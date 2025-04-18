import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function PressHere() {
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen bg-no-repeat bg-center bg-[length:100%_100%] font-turret' style={{ backgroundImage: "url('/pics/bg1.png')" }}>
        <img src="/pics/logo2.png" alt="logo" className='relative w-[100px] h-[80px] top-[90px] left-[160px] xl:top-[100px] xl:left-[570px] xl:h-[120px] xl:w-[140px]'/>  
        <img src="/pics/brdTrns.png" alt="border" className='relative top-[120px] w-[320px] h-[90px] left-[60px] xl:top-[120px] xl:left-[400px] xl:h-[140px] xl:w-[520px] bg-transparent'/>  
        <div className='relative top-[40px] text-[14px] w-[300px] h-[90px] left-[70px] xl:top-[0px] xl:left-[400px] xl:w-[500px] text-center font-bold xl:text-[20px] text-black'>
          Votre atelier de confiance pour la mécanique générale, l'électricité auto,
           la tôlerie-peinture <br/> et le pneumatique
        </div>
        <button className='relative text-[14px] w-[100px] h-[40px] left-[160px] top-[60px] xl:top-[50px] xl:left-[565px] xl:w-[170px] xl:h-[50px] rounded-[10px] font-[Turret_Road] font-bold text-white xl:text-[15px] shadow-[5px_5px_0px_white] bg-gradient-to-r from-red-900 via-red-500 to-red-900' onClick={() => navigate("/Acceuil")}>CLIQUER ICI</button>
    </div>
  )
}
