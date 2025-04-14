import { Link } from "react-router-dom";
import LangSwitch from "./LangSwitch";

export default function Navbar() {
  return (
    <nav className="w-full z-[1000] mt-2">
      {/* Social / Contact Bar */}
      <div className="bg-gradient-to-r from-[#c23434] to-[#8e0d0d] p-1 w-full font-space flex items-center justify-between">
        {/* Left side with social icons */}
        <div className="flex items-center gap-2 ml-4">
          <a href="https://www.instagram.com/"><img src="/pics/inst1.png" className="h-[30px] w-[30px]" /></a>
          <a href="https://www.facebook.com/"><img src="/pics/fb1.png" className="h-[30px] w-[30px]" /></a>
          <a href="https://www.tiktok.com/"><img src="/pics/tik1.png" className="h-[30px] w-[30px]" /></a>
        </div>
        
        {/* Center with contact info */}
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
        
        {/* Right side with language switcher */}
        <div >
          <LangSwitch />
        </div>
      </div>

      {/* Navbar links */}
      <div className="w-full flex justify-center font-neo">
        <div className="w-[70%] flex items-center justify-between relative top-9">
          {/* Left Nav */}
          <ul className="flex items-center gap-8 list-none p-3 pl-4 border-[#c67070] border-b  border-t border-l">
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

          {/* Logo */}
          <div className="relative -top-3 ">
            <img src="/pics/logo2.png" className="w-[110px] h-[85px]" />
          </div>

          {/* Right Nav */}
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