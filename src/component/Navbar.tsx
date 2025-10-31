import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const openLinkedIn = () => window.open("https://www.linkedin.com/in/favour-chigozirim-3aa345370", "_blank");
      const openX = () => window.open("https://x.com/Fav_Chigozirim", "_blank");
      const openGitHub = () => window.open("https://github.com/Gozirimdev", "_blank");
      const openEmail = () => window.open("mailto:Chigozirimfavour001@gmail.com", "_blank");




  return (
    <>
      <nav className="text-white w-full bg-transparent backdrop-blur-md fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center px-6 py-4 md:px-12">
          {/* Logo */}
          <h2 className="text-xl font-bold text-[#009C00]">
            Favour Chigozirim
          </h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-stone-400 text-md gap-8 font-medium items-center">
            <NavLink to='/' className="hover:text-[#009C00] transition">Home</NavLink>
            <NavLink to='/about' className="hover:text-[#009C00] transition">About</NavLink>
            <NavLink to={'/project'} className="hover:text-[#009C00] transition">Projects</NavLink>
            <NavLink to={'/contact'} className="hover:text-[#009C00] transition">Contact</NavLink>
          </ul>

          {/* Social Icons + Button (Desktop) */}
          <div className="hidden md:flex gap-6 items-center">
            <IoLogoGithub className="text-xl hover:text-[#009C00] cursor-pointer transition" onClick={openGitHub}  />
            <SlSocialLinkedin className="text-xl hover:text-[#009C00] cursor-pointer transition" onClick={openLinkedIn} />
            <FaXTwitter className="text-xl hover:text-[#009C00] cursor-pointer transition" onClick={openX} />
            <button className="bg-[#009C00] rounded-xl py-2 px-4 text-black font-medium text-sm hover:bg-[#00b700] transition" onClick={openEmail}>
              Hire me
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl text-[#009C00]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-2/3 bg-black/90  backdrop-blur-md text-white z-40 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          
          <ul className="flex flex-col gap-6 text-lg font-medium mt-8 px-6">
            <NavLink to='/'
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#009C00] cursor-pointer transition"
            >
              Home
            </NavLink>
            <NavLink to={'/about'}
              onClick={() => setMenuOpen(false)}
              
              className="hover:text-[#009C00] cursor-pointer transition"
            >
              About
            </NavLink>
            <NavLink to={'/project'}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#009C00] cursor-pointer transition"
            >
              Projects
            </NavLink>
            <NavLink to={'/contact'}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#009C00] cursor-pointer transition"
            >
              Contact
            </NavLink>
          </ul>

          <div className="flex flex-col  lg:gap-8 md:gap-6 px-6 mt-10">
            <div className="flex gap-4">
              <IoLogoGithub className="text-2xl hover:text-[#009C00] cursor-pointer transition" onClick={openGitHub}/>
              <SlSocialLinkedin className="text-2xl hover:text-[#009C00] cursor-pointer transition" onClick={openLinkedIn} />
              <FaXTwitter className="text-2xl hover:text-[#009C00] cursor-pointer transition" onClick={openX} />
               <button className="bg-[#009C00] rounded-xl py-2 px-4 text-black font-medium text-sm hover:bg-[#00b700] transition w-fit" onClick={openEmail}>
              Hire me
            </button>
            </div>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
