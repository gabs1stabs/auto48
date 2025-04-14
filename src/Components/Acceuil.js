import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleTouchStart = (event) => {
    setIsDragging(true);
  };

  // Add these useEffect hooks to handle events
  useEffect(() => {
    // Mouse events
    const handleMouseMove = (event) => {
      if (isDragging) {
        slide(event.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Touch events
    const handleTouchMove = (event) => {
      if (isDragging && event.touches.length > 0) {
        slide(event.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]); // Only re-run when isDragging changes

  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <div>
      <div className='text-center w-[550px] relative top-[70px] left-1/2 transform -translate-x-1/2 p-[13px_10px] z-10 font-turret'
      style={{
        borderTop: "2px solid transparent",
        borderBottom: "2px solid transparent",
        borderImage: "linear-gradient(to right, white, rgb(214, 28, 28), white) 1", 
      }}>
        Votre atelier de confiance pour la mécanique générale, l'électricité auto, la tôlerie-peinture et le pneumatique
      </div>
      <div 
        className='relative top-[50px] z-1' 
        ref={imageContainer}
      >
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white/70 to-transparent z-5"></div>
      <div className='bg-gradient-to-b from-white/70 to-transparent'/>
        <img src='/pics/car1.png' alt='before car' className='w-full h-[500px] m-0' />
              <div className="absolute top-0 left-0 w-full h-[130px] pointer-events-none"
                    style={{
                    backdropFilter: "blur(1px)",
                    WebkitBackdropFilter: "blur(1px)",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.9), transparent)"
                  }} />
        <img 
          src='/pics/car2.png' 
          alt='after car' 
          className='w-full h-[500px] absolute inset-0 ' 
          style={{clipPath: `polygon(0 0, ${revealAfterBeforePic * 100}% 0, ${revealAfterBeforePic * 100}% 100%, 0 100%)`}} />
                 <div className="absolute top-0 left-0 w-full h-[150px] pointer-events-none" 
                      style={{
                      backdropFilter: "blur(0px)",
                      WebkitBackdropFilter: "blur(0px)",
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.9), transparent)"
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
              className='absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-white rounded-full cursor-pointer'
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
              }}
            >
              <img src='/pics/arrows.png' className='w-[26px] h-[13px] relative top-[16px] left-[12px]' alt="Arrows" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap bg-black py-4 mt-10 group">
          <div className="flex animate-loop-scroll w-max group-hover:[animation-play-state:paused]">
            <div className="flex">
              {images.map((src, i) => (
                <img
                  key={`first-${i}`}
                  src={src}
                  alt="pic"
                  className="w-[120px] h-[70px] mx-[50px]"
                />
              ))}
            </div>
            <div className="flex">
              {images.map((src, i) => (
                <img
                  key={`second-${i}`}
                  src={src}
                  alt="pic"
                  className="w-[120px] h-[70px] mx-[50px]"
                />
              ))}
            </div>
          </div>
      </div>
      <div className="relative">
        <div className="flex gap-[50px] items-center">
          <img src="/pics/carwheelpat1.png" alt="car wheel pattern" className="w-[50%] h-[800px]" />
          <img src="/pics/carwheelpat.png" alt="car wheel pattern" className="w-[50%] h-[800px]" />
        </div>
        <div className="absolute top-[75px] left-[340px] flex items-center justify-center">
          <div className="m-[10px]">
            <img src="/pics/design-r1.png" alt="Design" className="w-[110px] h-[30px]" />
          </div>
          <div className="font-neo font-light text-[30px] text-[#320606]"> QUI SOMME <span style={{color:"#a71818"}}>NOUS</span> </div>
          <div className="m-[10px]">
            <img src="/pics/design-r.png" alt="Design" className="w-[110px] h-[30px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen relative bottom-[670px]">
  <div className="flex items-start gap-[70px]">
    <div>
      <img src="/pics/apr-pic.png" alt="a propos picture" className="w-[500px] h-[390px]" />
    </div>
    <div>
      <div className="w-[130px] mb-3">
        <img src="/pics/car-icon.png" alt="car icon" />
      </div>
      <div className="font-neo text-[#320606] text-[17px] font-light w-[500px] mb-3">
        Découvrez des solutions <br />abordables pour votre voiture<span className="text-red-600">!</span>
      </div>
      <div className="text-[16px] w-[450px] font-medium font-turret mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere faucibus elit ut, aliquam convallis nislonvMaecenas ultricies in neque. Lorem ipsum dolor sit cibus elit ut.
      </div>
      <button
        style={{
          clipPath: "polygon(0 0, 94% 0, 100% 20%, 100% 100%, 80% 100%, 6% 100%, 0% 80%, 0% 20%)",
        }}
        className="bg-gradient-to-r from-[#7a0404] to-[#d10000] text-white font-medium border-none px-4 py-2 text-[14px] font-turret w-[180px] flex items-center gap-2"
        onClick={handleClick}
      >
        <img src="/pics/upArrow.png" className="w-5" /> DÉCOUVRIR PLUS
      </button>
      <div style={{borderTop:"1px solid transparent",
                  borderImage: "linear-gradient(to right, black, white) 1",
                  marginTop:"20px" 
                }}/>
      <div className="flex items-center gap-2 mt-5">
        <img src="/pics/phone-icon.png" alt="Phone icon" className="w-[40px]" />
        <div>
          <div className="text-[13px] font-space font-bold">SERVICE CLIENT</div>
          <div className="text-[13px] font-bold font-space text-red-600">
            05 36 716 778 - 05 36 716 777
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
<div className='relative'>
  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[800px]">
    <div className="m-[10px]">
      <img src="/pics/design-w1.png" alt="Design" className="w-[110px] h-[30px]" />
    </div>
    <div className="font-neo font-light text-[30px] text-white">
      NOS SERVICES <span style={{ color: "#a71818" }}>AUTO</span>
    </div>
    <div className="m-[10px]">
      <img src="/pics/design-w.png" alt="Design" className="w-[110px] h-[30px]" />
    </div>
    <div className='font-turret absolute text-white top-[80px] text-[24px]'>" L'EXCELLENCE À CHAQUE RÉPARATION "</div>

  </div>

<div className="flex justify-center -mt-[650px]">
  <div className="relative w-fit">
    <img src="/pics/rec-back.png" alt="Background" className="block" />
    <img src="/pics/frame-back.png" 
          alt="Frame" 
          className="absolute top-0 right-0"/>
  </div>
 
</div>



</div>

</div>
  );
}