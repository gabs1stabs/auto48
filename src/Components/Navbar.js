import { Link, useLocation } from "react-router-dom";
import LangSwitch from "./LangSwitch";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="w-full z-[1000] mt-2">
      {/* Desktop top bar */}
      <div className="w-full font-space flex items-center justify-between bg-gradient-to-r from-[#c23434] to-[#8e0d0d] p-2 sm:flex hidden">
        <div className="flex items-center gap-2 ml-4">
          <a href="https://www.instagram.com/"><img src="/pics/inst1.png" className="h-[30px] w-[30px]" /></a>
          <a href="https://www.facebook.com/"><img src="/pics/fb1.png" className="h-[30px] w-[30px]" /></a>
          <a href="https://www.tiktok.com/"><img src="/pics/tik1.png" className="h-[30px] w-[30px]" /></a>
        </div>
        
        <div className="flex flex-grow justify-center items-center">
          <img src="/pics/arr11.png" className="w-[190px] h-[13px] mr-4" />
          <div className="flex items-center gap-3 text-white text-[14px] font-medium">
            <img src="/pics/phone1.png" className="h-[20px] w-[25px]" />
            <span>05 36 716 777</span>
            <img src="/pics/phone1.png" className="h-[20px] w-[25px]" />
            <span>05 36 716 778</span>
            <img src="/pics/email1.png" className="h-[20px] w-[25px]" />
            <span>CONTACT@AUTO48.MA</span>
          </div>
          <img src="/pics/arr22.png" className="w-[190px] h-[13px] ml-4" />
        </div>
      </div>

      <div className="sm:hidden">
        <div className="flex justify-between items-center mx-2 my-2 border-1 border-red-700 p-2">
          <div>
            <LangSwitch />
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="text-red-700 text-3xl"
          >
            <i className="bx bx-menu"></i>
          </button>
        </div>
        
        <div className="flex justify-center mt-3 mb-4">
          <img src="/pics/logo2.png" className="w-[100px] h-[75px]" />
        </div>
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-red-800 to-red-950 z-[2000] flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-200 border-2 border-white p-1"
        >
          <i className="bx bx-x w-5"></i>
        </button>
        
        <div className="flex flex-col items-center gap-6 font-neo text-base w-64">
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
        
        <div className="absolute bottom-16 flex justify-center items-center gap-3">
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
        
        <div className="absolute bottom-1 text-white text-center font-turret">
          <p>© SOFTCACTUS, TOUS LES DROITS SONT RÉSERVÉS, 2025</p>
        </div>
      </div>
      
      <div className="absolute top-3 right-1 hidden sm:block">
        <LangSwitch />
      </div>
      
      <div className="w-full flex justify-center font-neo hidden sm:flex">
        <div className="w-[70%] flex items-center justify-between relative top-9">
          <ul className="flex items-center gap-8 list-none p-3 pl-4 border-[#c67070] border-b border-t border-l">
            <li>
              <Link to="/Acceuil" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px]">ACCEUIL</Link>
            </li>
            <li>
              <Link to="/Apropos" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px]">A-PROPOS</Link>
            </li>
            <li>
              <Link to="/Services" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px]">SERVICES</Link>
            </li>
          </ul>
          <div className="relative -top-3">
            <img src="/pics/logo2.png" className="w-[110px] h-[85px]" />
          </div>

          <ul className="flex items-center gap-8 list-none p-3 pl-4 border-t border-[#c67070] border-b border-r">
            <li>
              <Link to="/Nosprojets" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px]">NOS PROJETS</Link>
            </li>
            <li>
              <Link to="/Gallery" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px]">GALLERY</Link>
            </li>
            <li>
              <Link to="/Contact" className="text-[#32060699] hover:text-red-600 hover:underline text-[10px]">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}