import { useState } from "react";
export default function HomePga(){
    const[LName,setLName]=useState('');
    const [FName,setFName]=useState('');
    const[phone,setPhone]=useState('');
    const[message,setMessage]=useState('');
    function GoToTheTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return(
        <section className="h-screen">   
        <div className="hidden lg:relative lg:mt-5">
          <img src="./Pics/Vector 2Top.png" alt="" />
          <img src="./Pics/VectorTop.png" alt="" />
        </div>
      
        <div className="grid lg:grid-cols-6  pr-[140px]">  
          <div className="col-span-6">
            {/* BigVector Image */}
            <img src="./Pics/BigVector.png" alt="" className="hidden lg:absolute -top-28" />
      
            {/* Mobile Vector Images */}
            <div className="flex absolute top-[337px] -left-6 ">
            <img src="./Pics/BigVector.png" alt="" className="absolute -top-[335px] ml-12 lg:ml-20 lg:-mt-20 " />
              <img src="./Pics/mobile/VectorDown.png" alt="" />
              <img src="./Pics/mobile/VectorDown.png" alt="" className="-ml-4 lg:ml-0"/>
              <img src="./Pics/mobile/VectorDown.png" alt="" className="-ml-4 lg:ml-0"/>
              <img src="./Pics/mobile/VectorDown.png" alt="" className="-ml-4 lg:ml-0" />
              <img src="./Pics/mobile/VectorDown.png" alt="" className="-ml-4 lg:ml-0"/>
              <img src="./Pics/mobile/VectorDown.png" alt="" className="-ml-4 lg:ml-0"/>
            </div>
        </div>
      </div>
      {/* paragraphes*/}
        <div className="grid ml-5 mr-7 mt-20 lg:ml-32 lg:mt-32 ">
            <div className="grid-cols-7 lg:col-span-4">
            <p className="font-neo lg:mr-32 font-[400] text-[16.1px]/[25.83px] text-[#320606] uppercase lg:text-[25.22px]" >Réparation et réglage <br /> automobile innovants.</p>
            <p className="font-turret font-[500] text-[15px] text-[#323131] mt-3 lg:text-[18.02px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Donec dolor ante, posuere faucibus elit ut, aliquam.</p>
          
            <div className="relative p-4">
                <div className="-ml-5 lg:mt-4 ">
                    <div className="grid relative bg-no-repeat mr-2 lg:w-[465px] " style={{ backgroundImage: "url('./Pics/Paragraphesbackground.png')" }}>
                         <div className="col-span-5 m-4 mb-2  border-solid w-[44.49px] h-[44.49px] lg:w-[62px] lg:h-[62px]" ><img src="./Pics/FirstPlogo.png" alt="" /> </div>
                         <div className="ml-24 -mt-[58px] grid-cols-6">
                              <p className="font-turretBold text-[15px] text-[#3C2B1F] font-[800] uppercase lg:txet-[19.96px]">LOREM IPSUM DOLOR</p>
                              <p className="font-turret text-[12px] mb-4 text-[#323131]  lg:txet-[14.41px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere.</p>
                         </div>
                    </div>  
                </div>

                <div className="-ml-5 mt-2 lg:mt-3">
                    <div className="grid relative bg-no-repeat mr-2 lg:w-[465px]" style={{ backgroundImage: "url('./Pics/Paragraphesbackground.png')" }}>
                         <div className="grid-cols-3 m-4 mb-2 border-solid w-[44.49px] h-[44.49px] lg:w-[62px] lg:h-[62px]" ><img src="./Pics/secndParLogo.png" alt="" /> </div>
                          <div className="ml-24 -mt-[58px] grid-cols-6">
                               <p className="font-turretBold text-[15px] text-[#3C2B1F] font-[800] uppercase lg:txet-[19.96px]">LOREM IPSUM DOLOR</p>
                              <p className="font-turret text-[12px] mb-4 text-[#323131] lg:txet-[14.41px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere.</p>
                         </div>
                    </div>  
                </div> 
            </div>
        </div>
    </div>

    <div className="lg:col-span-4 lg:w-[826px] lg:h-[413.65] lg:w-[750px] lg:h-[320.65]">
        <img src="./Pics/carpic.png" alt="" className="-ml-3 lg:col-span-6 lg:-mt-[25rem] lg:ml-[33.5rem] lg:w-[826px] lg:h-[413.65]" />
    </div>

    <div className="flex mt-24 -ml-3 lg:hidden">
        <img src="./Pics/mobile/Pattern (6).png" alt="" className="-ml-[10px]" />
        <img src="./Pics/mobile/Pattern (5).png" alt="" className="ml-[36px]" style={{position:"relative",top:"-1rem"}} />
    </div>

   {/*imgs row, scroller */}
 <div>
    <div className="overflow-x-hidden flex w-max -mt-[727px]  gap-3 animate-scrollLeft will-change-transform scrollbar-transparent lg:mt-9" style={{overflow:"hidden"}}>
        <img src="./Pics/6ImgInRow.png" alt="" className="w-[200px]" />
        <img src="./Pics/7ImgInRow.png" alt="" className="w-[200px]"/>
        <img src="./Pics/8ImgInRow.png" alt="" className="w-[200px]" />
        <img src="./Pics/9ImgInRow.png" alt="" className="w-[200px]" />
        <img src="./Pics/lastImgInRow.png" alt="" className="w-[200px]"/>
        <img src="./Pics/6ImgInRow.png" alt="" className="w-[200px]"/>
        <img src="./Pics/7ImgInRow.png" alt="" className="w-[200px]" />
        <img src="./Pics/8ImgInRow.png" alt="" className="w-[200px]"/>
        <img src="./Pics/9ImgInRow.png" alt="" className="w-[200px]"/>
        <img src="./Pics/lastImgInRow.png" alt="" className="w-[200px]"/>
        
    </div>
 </div> 
 {/*links to socia media */}
    <div className="-ml-1">
        <div className=" mt-16 ml-4 flex lg:hidden">
             <img src="./Pics/breaklineLeft.png" alt="" className="mr-40 ml-5"/>
             <img src="./Pics/breaklineRight.png" alt="" className="ml-4 " />
        </div>
        <div className=" lg:mt-16 lg:ml-32 lg:gap-28 lg:flex hidden">
             <img src="./Pics/breaklineLeftDesktop.png" alt="" className="mr-40 ml-5"/>
             <img src="./Pics/breaklineRightDesktop.png" alt="" className="ml-4 " />
        </div>
        <div className="flex gap-2 -mt-8 ml-[7.4rem] lg:ml-[36.5rem] lg:gap-4 lg:mb-6">
           <a href="https://web.facebook.com/" target="_blank" >
             <img src="./Pics/FacebookLogo.png" alt="" className="w-[48px] h-[48px]"/>
           </a>
          <a href="https://www.instagram.com/" target="_blank" >
           <img src="./Pics/InstagramLogo.png" alt="" className="w-[48px] h-[48px]"/>
          </a>
          <a href="https://www.tiktok.com/login?lang=fr&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Dfr" target="_blank" rel="noopener noreferrer">
          <img src="./Pics/tiktokLogo.png" alt="" className="w-[48px] h-[48px]"/>
           </a>
        </div>
    </div>    

    {/*Second Layout */}
    <div className="flex gap-20 -mt-12 -ml-20 lg:ml-[40rem] lg:gap-3 lg:mt-1 ">
        <img src="./Pics/smallCar1.png" alt="" className="lg:-mt7" />
        <button onClick={GoToTheTop}><img src="./Pics/vectorLogo.png" alt="" className="h-[58.36px] w-[57px] mt-7 ml-7 lg:-mt-4 lg:ml-12 lg:h-[77.6.36px] lg:w-[77.6px]"/> </button>
    </div>
    <div className="relative h-screen lg:hidden " >
        <div style={{backgroundImage:"url('./Pics/mobile/FormBg.png')",  clipPath: 'polygon(20% 0%, 82% 0, 100% 12%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 0)',
                 WebkitClipPath: 'polygon(20% 0%, 66% 0, 100% 16%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 0)'}} className="relative bg-no-repeat w-screen mt-[27rem] z-0 h-screen" >
        
        <img src="./Pics/48Mobile.png" alt="" className="relative z-10 -mt-[31.5rem] -ml-[0.3rem] mx-auto " style={{top:"8rem"}} />
        <div className="relative z-10 -mt-32 ml-[27.3px]">
           <div>
             <img src="./Pics/mobile/whiteLinear.png" alt="" className="w-[227.4px]" />
             <p className="text-white text-[24.09px] font-neo mt-2">POUR NOUS JOINDRE </p>
             <p className="text-white font-turretBold text-[15.6px] uppercase">Découvrez des solutions abordables <br /> pour votre voiture!</p>
            </div> 
             
            <div className="text-white">
                                 <p className="">
                                  <img src="./Pics/phoneLogo.png" alt="" className="mt-10"/>
                                  <p className="font-turretBold text-[19.99px] ml-20 -mt-[4.3rem]" style={{top:"5rem"}} >Appeler à tout moment</p>
                                  <p className="ml-20 font-turret text-[16.04px]">05 36 716 777</p>
                                  <p className="ml-20 font-turret text-[16.04px]" >05 36 716 778</p>
                                 </p>
        
                                 <p className="mt-5">
                                    <img src="./Pics/mailLogo.png" alt="" />
                                    <p className="font-turretBold text-[19.99px] ml-20 -mt-[3.4rem]"  >Envoyer un e-mail</p>
                                    <p  className="font-turret text-[16.04px] ml-20 ">contact@auto48.ma</p>
                                 </p>
                                 
                                 <p className="mt-8">
                                    <img src="./Pics/locationLogo.png" alt="" />
                                    <p className="font-turretBold text-[19.99px] ml-20 -mt-[4rem]">Visitez-nous</p>
                                    <p className="font-turret text-[16.04px] ml-20"  >Rte d'Algérie lotis boustane 3 N° 191 <br /> Zone industrielle - Oujda</p>
                                 </p>
            </div>

           
           
            <div
  className="relative z-0 bg-no-repeat bg-cover py-8 px-6 w-[430.41px] h-[480px] -ml-4 "
  style={{ backgroundImage: "url('./Pics/formBg.png')" }}
>
<p className="flex w-[268.34px] ml-7 p-2">
                <img src="./Pics/redLine.png" className="" alt="" />
                <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem]">PARLEZ-NOUS</p>
            </p>
 

  {/* Form Section */}
  <form className="relative z-10 space-y-4 text-sm font-turret w-[313.51px] ml-4 rounded-s-[2rem]">
    <input
      type="text"
      placeholder="Nom"
      value={LName}
      onChange={(e) => setLName(e.target.value)}
      className="w-full p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px]  text-black placeholder-black"
    />
    <input
      type="text"
      placeholder="Prénom"
      value={FName}
      onChange={(e) => setFName(e.target.value)}
      className="w-full p-3 border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <input
      type="text"
      placeholder="Téléphone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full text-black p-3 border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <textarea
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input h-24 resize-none"
    />
    <button className="bg-gradient-to-r from-[#C81717] to-[#700000] text-white px-4 py-2  shadow-md w-[313.51px] " style={{clipPath:"polygon(20% 0%, 98% 0, 100% 22%, 100% 100%, 80% 100%, 3% 100%, 0 77%, 0 0)"}}>
      Envoyé
    </button>
  </form>
  <p className="text-[15.55px] uppercase font-turretBold text-white text-center mt-7 ">© SOFTCACTUS, Tous les droits sont réservés, 2025</p>
</div>

           </div>
          
        </div>

       
        </div>

 {/*desktop layout */}
 
       

   
   
    <div className="relative h-screen lg:mt-10 lg:-ml-10 lg:w-screen lg:mr-4  lg:mt-52" >
        <div style= {{backgroundImage:"url('./Pics/backgroundJoinUs.png')",  clipPath: 'polygon(18% 0, 80% 0%, 100% 0, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 18%)',
                 WebkitClipPath: 'polygon(8% 0, 80% 0%, 100% 0, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 18%)'}} className="relative bg-no-repeat w-screen mt-[27rem] z-0 h-screen lg:w-screen lg:w-screen lg:-mt-[16rem] lg:ml-20 lg:mr-4 " >
        
        <img src="./Pics/48background.png" alt="" className="relative z-10 mt-[4.5rem] -ml-[0.3rem] lg:w-[1547.84px] lg:h-[541.84px]" style={{top:"8rem"}} />
        <div className="relative z-10 -mt-32 ml-[27.3px] lg:ml-48 lg:-mt-[28rem]">
           <div>
             <img src="./Pics/mobile/whiteLinear.png" alt="" className="w-[227.4px]" />
             <p className="text-white text-[24.09px] font-neo mt-2 lg:text-[33.78px]">POUR NOUS JOINDRE </p>
             <p className="text-white font-turretBold text-[15.6px] uppercase lg:text-[21.87px]">Découvrez des solutions abordables <br /> pour votre voiture!</p>
            </div> 
             
            <div className="text-white">
                                 <p className="">
                                  <img src="./Pics/phoneLogo.png" alt="" className="mt-10"/>
                                  <p className="font-turretBold text-[19.99px] ml-20 -mt-[4.3rem] lg:text-[20.98px]" style={{top:"5rem"}} >Appeler à tout moment</p>
                                  <p className="ml-20 font-turret text-[16.04px] lg:text-[16.83px]">05 36 716 777</p>
                                  <p className="ml-20 font-turret text-[16.04px] lg:text-[16.83px]" >05 36 716 778</p>
                                 </p>
        
                                 <p className="mt-5">
                                    <img src="./Pics/mailLogo.png" alt="" />
                                    <p className="font-turretBold text-[19.99px] ml-20 -mt-[3.4rem] lg:text-[20.98px]"  >Envoyer un e-mail</p>
                                    <p  className="font-turret text-[16.04px] ml-20 lg:text-[16.83px] ">contact@auto48.ma</p>
                                 </p>
                                 
                                 <p className="mt-8">
                                    <img src="./Pics/locationLogo.png" alt="" />
                                    <p className="font-turretBold text-[19.99px] ml-20 -mt-[4rem] lg:text-[20.98px]">Visitez-nous</p>
                                    <p className="font-turret text-[16.04px] ml-20 lg:text-[16.83px]"  >Rte d'Algérie lotis boustane 3 N° 191 <br /> Zone industrielle - Oujda</p>
                                 </p>
            </div>

           
           
            <div
  className="relative z-0 bg-no-repeat bg-cover py-8 px-6 w-[430.41px] h-[480px] -ml-4 lg:-mt-[29rem] lg:ml-[31rem] lg:w-[461.41px] lg:h-[512.49px] "
  style={{ backgroundImage: "url('./Pics/formBg.png')" }}
>
<p className="flex w-[268.34px] ml-7 p-2 lg:hidden xl:hidden 2xl:hidden">
                <img src="./Pics/redLine.png" className="lg:hidden" alt="" />
                
                <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem] lg:text-[20.38px] lg:ml-[3rem]">PARLEZ-NOUS</p>
            </p>
            <p className="flex w-[333.34px] ml-7 lg:ml-8 p-2">
               
                <img src="./Pics/fromLineLeft.png" alt="" className=" lg:w-[53.15px] lg:h-[33.15px]"/>
                <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem] lg:text-[20.38px] lg:ml-[1rem]">PARLEZ-NOUS</p>
                <img src="./Pics/fromLinRight.png" alt="" className=" lg:w-[53.15px] lg:h-[33.15px]"/>
            </p>
 

  {/* Form Section */}
  <form className="relative z-10 space-y-4 text-sm font-turret w-[313.51px] ml-4 rounded-s-[2rem]">
    <input
      type="text"
      placeholder="Nom"
      value={LName}
      onChange={(e) => setLName(e.target.value)}
      className="w-full p-3 lg:p-4 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px]  text-black placeholder-black"
    />
    <input
      type="text"
      placeholder="Prénom"
      value={FName}
      onChange={(e) => setFName(e.target.value)}
      className="w-full p-3 lg:p-4  border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <input
      type="text"
      placeholder="Téléphone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full lg:p-4  text-black p-3 border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <textarea
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full p-3 lg:p-4 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input h-24 resize-none"
    />
    <button className="bg-gradient-to-r from-[#C81717] to-[#700000] text-white px-4 py-2  shadow-md w-[313.51px] " style={{clipPath:"polygon(20% 0%, 98% 0, 100% 22%, 100% 100%, 80% 100%, 3% 100%, 0 77%, 0 0)"}}>
      Envoyé
    </button>
  </form>
  <p className="text-[15.55px] uppercase font-turretBold text-white text-center mt-7 lg:text-[#585858] lg:text-[19.21px] lg:mt-36 lg:hidden">© SOFTCACTUS, Tous les droits sont réservés, 2025</p>
</div>

           </div>
         
        </div>

        <p className="text-[#585858] lg:text-[19.21px] lg:mt-[2rem]   lg:text-center uppercase lg:font-turretBold ">© SOFTCACTUS, Tous les droits sont réservés, 2025</p>
        </div>

</section>
    )
}