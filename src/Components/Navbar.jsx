import React, { useState } from "react";
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white pt-4 ">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-20">
          <a href="#" className="text-6xl text-orange-600">
            <FaDumbbell />
          </a>
        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex gap-10">
          <a className="hover:text-gray-400" href="#about">
            About
          </a>
          <a className="hover:text-gray-400" href="#services">
            Services
          </a>
          <a className="hover:text-gray-400" href="#projects">
            Project
          </a>
          <a className="hover:text-gray-400" href="#pricing">
            Pricing
          </a>
        </div>
        </div>


        {/* Free Trial Button */}
        <div className="hidden lg:block">
          <button className="bg-orange-600 px-4 py-2 rounded-lg text-white font-semibold">
            Free Trial
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#13262e] absolute top-16 left-0 w-full flex flex-col items-center space-y-6 py-6 transition-all">
          <a className="hover:text-gray-400" href="#about">
            About
          </a>
          <a className="hover:text-gray-400" href="#services">
            Services
          </a>
          <a className="hover:text-gray-400" href="#projects">
            Project
          </a>
          <a className="hover:text-gray-400" href="#pricing">
            Pricing
          </a>
          <button className="bg-orange-600 px-4 py-2 rounded-lg text-white font-semibold">
            Free Trial
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
