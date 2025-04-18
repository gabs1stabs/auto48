import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCarousel from './ServiceCarousel';
import HomePga from '../Componenets/HomePage';


export default function Acceuil() {

  const images = [
    '/pics/1.png',
    '/pics/2.png',
    '/pics/3.png',
    '/pics/4.png',
    '/pics/5.png',
    '/pics/6.png',
    '/pics/7.png',
  ];
  
  const navigate = useNavigate();
  const [revealAfterBeforePic, setRevealAfterBeforePic] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);
  const imageContainer = useRef(null);

  const slide = (xPosition) => {
    if (imageContainer.current) {
      const containerBoundingRect = imageContainer.current.getBoundingClientRect();
      const newRevealValue = (xPosition - containerBoundingRect.left) / containerBoundingRect.width;
      setRevealAfterBeforePic(Math.min(Math.max(newRevealValue, 0), 1));
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        slide(event.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (event) => {
      if (isDragging && event.touches.length > 0) {
        slide(event.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]); 

  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <div>
      <div className='text-center md:w-[550px] ml-4 mr-5 relative md:top-[70px] top-[18px]  left-1/2 transform -translate-x-1/2 p-[13px_0] md:p-[13px_10px] z-10 font-turret'
      style={{
        borderTop: "1.5px solid transparent",
        borderBottom: "1.5px solid transparent",
        borderImage: "linear-gradient(to right,transparent, rgb(214, 28, 28), transparent) 1", 
      }}>
        Votre atelier de confiance pour la mécanique générale, l'électricité auto, la tôlerie-peinture et le pneumatique
      </div>
      <div 
        className='relative md:top-[50px] top-[14px] z-1' 
        ref={imageContainer}
      >
        <img
          src='/pics/car1.png' 
          alt='before car' 
          className='w-full md:h-[500px] h-[250px] sm:h-[300px]  m-0' />
                <div className="absolute top-0 left-0 w-full md:h-[90px] h-[60px] sm:h-[75px] pointer-events-none"
                      style={{
                      backdropFilter: "blur(0.5px)",
                      WebkitBackdropFilter: "blur(0.5px)",
                      background: "linear-gradient(to bottom , rgba(255,255,255,0.9),transparent)"
                    }} />
        <img 
          src='/pics/car2.png' 
          alt='after car' 
          className='w-full md:h-[500px] sm:h-[300px] h-[250px] absolute inset-0 ' 
          style={{clipPath: `polygon(0 0, ${revealAfterBeforePic * 100}% 0, ${revealAfterBeforePic * 100}% 100%, 0 100%)`}} />
                 <div className="absolute top-0 left-0 w-full md:h-[150px] sm:h-[75px] h-[60px] pointer-events-none" 
                      style={{
                      backdropFilter: "blur(1.5px)",
                      WebkitBackdropFilter: "blur(1px)",
                      background: "linear-gradient(to bottom , rgba(255,255,255,0.9), transparent)"
                    }} />
        <div 
          className='absolute inset-y-0' 
          style={{ left: `${revealAfterBeforePic * 100}%` }}
        >
          <div className='relative h-full'>
            <div 
              className='absolute top-0 left-1/2 w-[2px] h-full bg-white transform -translate-x-1/2'
            ></div>
            <div 
              className='absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 sm:w-[35px] sm:h-[35px] w-[30px] h-[30px] md:h-[50px]  md:w-[50px] bg-white rounded-full cursor-pointer'
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
              }}
            >
              <img src='/pics/arrows.png' className='w-5 h-2 sm:w-7 sm:h-[10px] md:w-[26px] md:h-[13px] relative md:top-[16px] md:left-[12px]  top-[10px] left-[5px] sm:top-[12px] sm:left-[4px]' alt="Arrows" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap bg-black py-[5px] sm:py-[10px] md:py-4 md:mt-10 mt-[13px] group">
          <div className="flex animate-loop-scroll w-max group-hover:[animation-play-state:paused]">
            <div className="flex">
              {images.map((src, i) => (
                <img
                  key={`first-${i}`}
                  src={src}
                  alt="pic"
                  className="md:w-[120px] md:h-[70px] md:mx-[50px] sm:mx-[30px] sm:w-[100px] sm:h-[55px] mx-[20px] w-[70px] h-[40px]  "
                />
              ))}
            </div>
            <div className="flex">
              {images.map((src, i) => (
                <img
                  key={`second-${i}`}
                  src={src}
                  alt="pic"
                  className="md:w-[120px] md:h-[70px] md:mx-[50px] sm:mx-[30px] sm:w-[90px] sm:h-[50px] mx-[20px] w-[70px] h-[40px]  "
                />
              ))}
            </div>
          </div>
      </div>
      <div className="w-[130px] mt-6 left-6 mb-2 relative  md:hidden">
        <img src="/pics/car-icon.png" alt="car icon" />
      </div>
<div className="relative "> 
  <div className="flex gap-[30px] items-center">
    <img src="/pics/carwheelpat1.png" alt="car wheel pattern" className="w-[47%] xl:h-[800px]  h-[500px]" />
    <img src="/pics/carwheelpat.png" alt="car wheel pattern" className="w-[47%] xl:h-[800px] h-[500px]" />
  </div>
  <div className="absolute xl:top-[65px] 2xl:top-[40px] top-[15px] md:mb-8 left-0 right-0 flex items-center justify-center w-[99%] md:mt-10 ">
    <div className="flex items-center">
      <div className="lg:m-[10px] mr-2 sm:mr-3 ">
        <img src="/pics/design-r1.png" alt="Design" className="md:w-[110px] 2xl:w-[160px] 2xl:h-[40px]  md:h-[30px] w-[90px] h-[20px] sm:h-[22px] sm:w-[150px]" />
      </div>
      <div className="font-neo 2xl:text-[35px] font-light lg:text-[30px] text-[21px] sm:text-[26px] whitespace-nowrap  text-[#320606]">
        QUI SOMME <span style={{color:"#a71818"}}>NOUS</span>
      </div>
      <div className="lg:m-[10px] ml-2 sm:ml-3">
        <img src="/pics/design-r.png" alt="Design" className="md:w-[110px] 2xl:w-[160px] 2xl:h-[40px]  md:h-[30px] w-[90px] h-[20px] sm:h-[22px] sm:w-[150px]" />
      </div>
    </div>
  </div>
</div>

<div className="flex md:justify-center mx-4 md:ml-6 md:mb-5  lg:items-center min-h-screen relative xl:bottom-[670px] lg:bottom-[450px] 2xl:bottom-[750px] bottom-[470px] md:bottom-[380px] w-full" >
  <div className="flex flex-col md:flex-row items-start lg:gap-[70px] gap-[50px] 2xl:gap-[90px]">
    <div>
      <img src="/pics/apr-pic.png" alt="a propos picture" className="lg:w-[490px] lg:h-[390px] 2xl:w-[600px] 2xl:h-[490px] md:w-[400px] md:h-[390px] ml-3 hidden md:block" />
    </div>
    <div>
      <div className="w-[130px] 2xl:w-[150px]  mb-4 hidden md:block">
        <img src="/pics/car-icon.png" alt="car icon" />
      </div>
      <div className="font-neo text-[#320606] lg:text-[17px] 2xl:text-[20px] text-[15px] font-light 2xl:w-[600px] lg:w-[500px] md:w-[370px] w-[90%] mb-3">
        Découvrez des solutions <br />abordables pour votre voiture<span className="text-red-600">!</span>
      </div>
      <div className="lg:text-[16px] 2xl:text-[19px] 2xl:w-[600px] text-[14px] lg:w-[450px] md:w-[390px] w-[90%] font-medium font-turret mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere faucibus elit ut, aliquam convallis nislonvMaecenas ultricies in neque. Lorem ipsum dolor sit cibus elit ut.
      </div>
      <button
        style={{
          clipPath: "polygon(0 0, 94% 0, 100% 20%, 100% 100%, 80% 100%, 6% 100%, 0% 80%, 0% 20%)",
        }}
        className="bg-gradient-to-r from-[#7a0404] to-[#d10000] text-white font-medium border-none px-4 py-2 2xl:py-4 text-[14px] 2xl:text-[16px] font-turret w-[190px] 2xl:w-[210px] flex items-center gap-2"
        onClick={handleClick}
      >
        <img src="/pics/upArrow.png" className="w-[15px] 2xl:w-[20px] " /> DÉCOUVRIR PLUS
      </button>
      <div style={{
        borderTop:"1px solid transparent",
        borderImage: "linear-gradient(to right, black, white) 1",
        marginTop:"20px"
      }}/>
      <div className="flex items-center gap-2  mt-4">
        <img src="/pics/phone-icon.png" alt="Phone icon" className="w-[40px] 2xl:w-[60px]" />
        <div>
          <div className="text-[13px] 2xl:text-[18px] font-space font-bold">SERVICE CLIENT</div>
          <div className="text-[13px] 2xl:text-[18px] font-bold font-space text-red-600">
            05 36 716 778 - 05 36 716 777
          </div>
        </div>
      </div>
            <div className=" ml-2 mt-4 md:hidden">
              <img src="/pics/apr-pic.png" alt="a propos picture" className=" w-[85%]  h-[250px]" />
            </div>
    </div>
  </div>
</div>

  <br/>
<div className='relative md:mt-[160px] mt-[-800px] lg:mt-[150px] xl:mt-[70px] 2xl:mt-[-900px] '>
  <div className="absolute 2xl:top-16 md:top-12 top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[800px]">
    <div className="lg:m-[10px] mr-2 sm:ml-2 2xl:m-[14px] ">
      <img src="/pics/design-w1.png" alt="Design" className="md:w-[110px] 2xl:w-[160px] 2xl:h-[40px] md:h-[30px] w-[88px] h-[20px] sm:h-[22px] sm:w-[146px]" />
    </div>
    <div className="font-neo font-light 2xl:text-[35px] lg:text-[30px] text-[19px] sm:text-[26px] whitespace-nowrap text-white">
      NOS SERVICES <span style={{ color: "#a71818" }}>AUTO</span>
    </div>
    <div className="lg:m-[10px] ml-2 sm:ml-0 2xl:m-[14px]">
      <img src="/pics/design-w.png" alt="Design" className="md:w-[110px] 2xl:w-[160px]  2xl:h-[40px] md:h-[30px] w-[88px] h-[20px] sm:h-[20px] sm:w-[146px]" />
    </div>
    <div className='font-turret absolute text-white 2xl:top-[90px] md:top-[70px] sm:top-[60px] top-[40px] text-[17px] 
              lg:text-[28px] 2xl:text-[34px] sm:text-[22px]'>" L'EXCELLENCE À CHAQUE RÉPARATION "</div> 
  </div>

<div className="flex justify-center lg:-mt-[680px] xl:-mt-[790px] md:-mt-[600px] mt-[350px]">
  <div className="relative w-full">
    <img src="/pics/rec-back.png" alt="Background" className="block top-0 right-0 h-[200px] sm:h-auto 3xl:h-[400px]  w-full" />
    <img src="/pics/frame-back.png" className="absolute top-0 right-0 h-[200px] sm:h-auto w-full  3xl:h-[400px]"/>
    <div className="absolute md:top-[160px] 2xl:top-[260px] sm:top-[120px] top-[100px] left-1/2 transform -translate-x-1/2 w-full ">
      <ServiceCarousel />
    </div>
  </div>
</div>

</div>
<div className='mt-20 sm:mt-[100px] lg:mt-0'>
  <HomePga/>
</div>


</div>
  );
}