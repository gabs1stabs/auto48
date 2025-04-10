import "./Navbar.css"
import React, { useRef, useState } from 'react';
import { Link } from "react-scroll";
import LangSwitch from "./LangSwitch";

function Navbar() {

  const [revealAfterBeforePic, setRevealAfterBeforePic] = useState(0.5);
  const imageContainer = useRef(null);
  const slide = (xPosition) => {
    if (imageContainer.current) {
      const containerBoundingRect = imageContainer.current.getBoundingClientRect();
      const newRevealValue = (xPosition - containerBoundingRect.left) / containerBoundingRect.width;
      
      // Ensure the value stays within bounds
      setRevealAfterBeforePic(Math.min(Math.max(newRevealValue, 0), 1));
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    // Start tracking mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    // Update the position of the slider and the reveal effect
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    // Stop tracking mouse movement
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };
  
    return (
        <div>
        <nav className="nv" >
            <div className="app__navbar1">  
                <a href="https://www.instagram.com/"><img src="/pics/inst1.png" className="ic1"/></a>
                <a href="https://www.facebook.com/"><img src="/pics/fb1.png" className="ic2"/></a>
                <a href="https://www.tiktok.com/"><img src="/pics/tik1.png" className="ic3"/></a>
                <img src="/pics/arr11.png" className="line1"/>
                <img src="/pics/phone1.png" className="ic4"/><div className="n1">05 36 716 777</div>
                <img src="/pics/phone1.png" className="ic41"/><div className="n2">05 36 716 778</div>
                <img src="/pics/email1.png" className="ic42"/><div className="c1">CONTACT@AUTO48.MA</div>
                <img src="/pics/arr22.png" className="line2"/> 
                <div className="langSwitch"><LangSwitch/></div>
            </div>
            <div className="app__navbar2">
                <ul className="app__navbar__links1">
                    <div className="left">
                    <li><a href="#Acceuil" style={{textDecoration:"none" ,color: "#32060699"}}onMouseEnter={(e) => { e.target.style.color = 'red'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#32060699'; e.target.style.textDecoration = 'none'; }}>ACCEUIL</a></li>
                    <li><a href="#Apropos" style={{textDecoration:"none",color: "#32060699"}} onMouseEnter={(e) => { e.target.style.color = 'red'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#32060699'; e.target.style.textDecoration = 'none'; }}>A-PROPOS</a></li>
                    <li><a href="#Services" style={{textDecoration:"none",color: "#32060699"}} onMouseEnter={(e) => { e.target.style.color = 'red'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#32060699'; e.target.style.textDecoration = 'none'; }}>SERVICES</a></li>
                    </div>
                        <div className="app__navbar_logo">
                            <img src="/pics/logo2.png" className="logo" />
                        </div>
                    <div className="right">
                    <li><a href="#Nosprojets" style={{textDecoration:"none",color: "#32060699"}}onMouseEnter={(e) => { e.target.style.color = 'red'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#32060699'; e.target.style.textDecoration = 'none'; }} >NOS PROJETS</a></li>
                    <li><a href="#Gallery" style={{textDecoration:"none",color: "#32060699"}}onMouseEnter={(e) => { e.target.style.color = 'red'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#32060699'; e.target.style.textDecoration = 'none'; }}>GALLERY</a></li>
                    <li><a href="#Contact"  style={{textDecoration:"none",color: "#32060699"}}onMouseEnter={(e) => { e.target.style.color = 'red'; e.target.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.target.style.color = '#32060699'; e.target.style.textDecoration = 'none'; }}>CONTACT</a></li>
                    </div>
                </ul>
            </div>
        </nav>
        <div className='accpage' id="Acceuil">
        <div className='pr'>
          Votre atelier de confiance pour la mécanique générale, l'électricité auto, la tôlerie-peinture et le pneumatique
        </div>
        <div className="blur-gradient"></div>

        <div className='bef-af' ref={imageContainer}>
        <div className="blur-gradient"></div>

          <img src='/pics/car2.png' alt='before car' className='before-car'/>
          <img 
            src='/pics/car1.png' 
            alt='after car' 
            className='after-car' 
            style={{
              clipPath: `polygon(0 0, ${revealAfterBeforePic * 100}% 0, ${revealAfterBeforePic * 100}% 100%, 0 100%)`
            }} 
          />
          <div 
            className='inset-y-0'
            style={{ left: `${revealAfterBeforePic * 100}%` }} // Make the slider follow the ball
          >
            <div className='relative h-full'>
              <div 
                className='slider' 
                style={{ left: `${revealAfterBeforePic * 100}%` }}  
              ></div>
              <div 
                className='slider-ball' 
                onMouseDown={handleMouseDown}
                style={{ left: `${revealAfterBeforePic * 100}%` }} 
              ><img src='/pics/arrows.png' className='arrows'/></div>
            </div>
          </div>
        </div>
          <div className='slider-bar' > 
            <div className='list'>
              <img src='/pics/1.png' alt='pic'/>
              <img src='/pics/2.png' alt='pic'/>
              <img src='/pics/3.png' alt='pic'/>
              <img src='/pics/4.png' alt='pic'/>
              <img src='/pics/5.png' alt='pic'/>
              <img src='/pics/6.png' alt='pic'/>
            </div>
            <div className='list'>
              <img src='/pics/1.png' alt='pic'/>
              <img src='/pics/2.png' alt='pic'/>
              <img src='/pics/3.png' alt='pic'/>
              <img src='/pics/4.png' alt='pic'/>
              <img src='/pics/5.png' alt='pic'/>
              <img src='/pics/6.png' alt='pic'/>
            </div>
          </div>
        </div>
        </div>

    );
}

export default Navbar;
