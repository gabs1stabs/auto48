import { Link, useLocation } from "react-router-dom";
import LangSwitch from "./LangSwitch";
import LangSwitch1 from "./LangSwitch1";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="w-full z-[1000] mt-2">
      <div className="w-full font-space  items-center justify-between bg-gradient-to-r from-[#c23434] to-[#8e0d0d] lg:p-[10px] lg:flex hidden">
        <div className="flex items-center lg:gap-2 2xl:gap-3 xl:ml-4 ">
          <a href="https://www.instagram.com/"><img src="/pics/inst1.png" className="lg:h-[30px] lg:w-[30px] 2xl:w-[35px] 2xl:h-[35px] md:h-[26px] md:w-[26px]" /></a>
          <a href="https://www.facebook.com/"><img src="/pics/fb1.png" className="lg:h-[30px] lg:w-[30px]  2xl:w-[35px] 2xl:h-[35px] md:h-[26px] md:w-[26px]" /></a>
          <a href="https://www.tiktok.com/"><img src="/pics/tik1.png" className="lg:h-[30px] lg:w-[30px] 2xl:w-[35px] 2xl:h-[35px] md:h-[26px] md:w-[26px]" /></a>
        </div>
        
        <div className="flex flex-grow justify-center items-center">
          <img src="/pics/arr11.png" className=" lg:w-[150px] 2xl:w-[250px] h-[13px] 2xl:h-[15px] ml-0 justify-left " />
          <div className="flex items-center lg:gap-2  text-white lg:text-[14px] 2xl:text-[16px] font-medium">
            <img src="/pics/phone1.png" className="lg:h-[20px] lg:w-[26px] 2xl:h-[22px] 2xl:w-[28px] " />
            <span className="lg:mr-4 md:mr-2">05 36 716 777</span>
            <img src="/pics/phone1.png" className="lg:h-[20px] lg:w-[26px] 2xl:h-[22px] 2xl:w-[28px]" />
            <span className="lg:mr-4 md:mr-2">05 36 716 778</span>
            <img src="/pics/email1.png" className="lg:h-[20px] lg:w-[26px] 2xl:h-[22px] 2xl:w-[28px]" />
            <span>CONTACT@AUTO48.MA</span>
          </div>
          <img src="/pics/arr22.png" className=" lg:w-[150px] 2xl:h-[15px] 2xl:w-[250px] h-[13px] 3xl:mr-14 xl:mr-12 xl:ml-4 mr-4 " />
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex justify-between items-center mx-4 my-4 border-1 border-red-700 p-1">
          <div>
            <LangSwitch1  />
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="text-red-700 text-3xl"
          >
          <img src="/pics/menuBtn.png" className=" bx-x w-6 mr-2"/>
          </button>
        </div>
        
        <div className="flex justify-center mt-4 mb-2">
          <img src="/pics/logo2.png" className="w-[110px] h-[85px]" />
        </div>
      </div>
      <div className={`fixed top-0 left-0 w-[90%] h-full bg-gradient-to-b from-red-800 to-red-950 z-[2000] flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-4 right-4 text-white text-3xl p-1"
        >
          <i className="bx bx-x w-5"></i>
        </button>
        
        <div className="flex flex-col items-center gap-6 font-neo text-base w-[40%] ">
          <Link 
            to="/Acceuil" 
            className={`text-${location.pathname === "/Acceuil" ? "red-700" : "white"} hover:text-gray-200 py-2 px-5 w-full text-center border border-white ${location.pathname === "/Acceuil" ? "bg-white" : ""}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            ACCEUIL
          </Link>
          <Link 
            to="/Apropos" 
            className={`text-${location.pathname === "/Apropos" ? "red-700" : "white"} hover:text-gray-200 py-2 px-5 w-full text-center border border-white ${location.pathname === "/Apropos" ? "bg-white" : ""}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            A PROPOS
          </Link>
          <Link 
            to="/Services" 
            className={`text-${location.pathname === "/Services" ? "red-700" : "white"} hover:text-gray-200 py-2 px-5 w-full text-center border border-white ${location.pathname === "/Services" ? "bg-white" : ""}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link 
            to="/Nosprojets" 
            className={`text-${location.pathname === "/Nosprojets" ? "red-700" : "white"} hover:text-gray-200 py-2 px-5 w-full text-center border border-white ${location.pathname === "/Nosprojets" ? "bg-white" : ""}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            NOS PROJETS
          </Link>
          <Link 
            to="/Gallery" 
            className={`text-${location.pathname === "/Gallery" ? "red-700" : "white"} hover:text-gray-200 py-2 px-5 w-full text-center border border-white ${location.pathname === "/Gallery" ? "bg-white" : ""}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            GALLERY
          </Link>
          <Link 
            to="/Contact" 
            className={`text-${location.pathname === "/Contact" ? "red-700" : "white"} hover:text-gray-200 py-2 px-5 w-full text-center border border-white ${location.pathname === "/Contact" ? "bg-white" : ""}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
        
        <div className="absolute top-[70%] flex justify-center items-center gap-3">
          <a href="https://www.instagram.com/" className="text-white hover:text-gray-200">
            <img src="/pics/inst1.png" className="h-10 w-10" />
          </a>
          <a href="https://www.facebook.com/" className="text-white hover:text-gray-200">
            <img src="/pics/fb1.png" className="h-10 w-10" />
          </a>
          <a href="https://www.tiktok.com/" className="text-white hover:text-gray-200">
            <img src="/pics/tik1.png" className="h-10 w-10" />
          </a>
        </div>
        
        <div className="absolute bottom-5  text-white text-center font-turret">
          <p>© SOFTCACTUS, TOUS LES DROITS <br/> SONT RÉSERVÉS, 2025</p>
        </div>
      </div>
      
      <div className="absolute lg:top-3 2xl:top-4 right-[-50px] hidden lg:block ">
        <LangSwitch />
      </div>
      
      <div className="w-full  justify-center font-neo hidden lg:flex">
        <div className="xl:w-[60%] 3xl:w-[55%] flex items-center justify-between relative top-9  ">
          <ul className="flex skew-x-[15deg] items-center xl:gap-8 2xl:gap-10 gap-4 list-none xl:pl-11 3xl:pl-12 2xl:py-4 py-2 2xl:mr-4 3xl:py-[19px] xl:mr-6 3xl:mr-3">
          <div class="absolute inset-y-0 left-0 w-px bg-gradient-to-r bg-[#c67070]"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#c67070] to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#c67070] to-transparent"></div>
            <li className="skew-x-[-15deg]">
              <Link to="/Acceuil" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px] 2xl:text-[12px]">ACCEUIL</Link>
            </li>
            <li className="skew-x-[-15deg]">
              <Link to="/Apropos" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px] 2xl:text-[12px]">A-PROPOS</Link>
            </li>
            <li className="skew-x-[-15deg]">
              <Link to="/Services" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px] 2xl:text-[12px]">SERVICES</Link>
            </li>
          </ul>
          
          <div className="relative left-3 -top-3">
            <img src="/pics/logo2.png" className="w-[110px] h-[85px] 2xl:w-[130px] 2xl:h-[95px] 3xl:w-[140px] 3xl:h-[100px]" />
          </div>
          <ul className="flex skew-x-[-15deg] items-center xl:gap-8 gap-4 2xl:gap-10 list-none lg:pr-8 xl:pr-11 3xl:pr-12 2xl:py-4 3xl:py-[19px] py-2 2xl:ml-4 xl:ml-6  3xl:ml-3 ">
          <div class="absolute inset-y-0 right-0 w-px bg-gradient-to-r bg-[#c67070]"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-[#c67070] to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-[#c67070] to-transparent"></div>
            <li className="skew-x-[15deg]">
              <Link to="/Nosprojets"  className=" text-[#32060699] hover:text-red-600 hover:underline text-[10px] 2xl:text-[12px]">NOS PROJETS</Link>
            </li>
            <li className="skew-x-[15deg]">
              <Link to="/Gallery" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px] 2xl:text-[12px]">GALLERY</Link>
            </li>
            <li className="skew-x-[15deg]">
              <Link to="/Contact" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px] 2xl:text-[12px]">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}