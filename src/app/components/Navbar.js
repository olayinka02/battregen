"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white flex items-center justify-center mt-4 px-2 md:px-0">
      <nav className="bg-brandblack w-full md:w-4/5  rounded-2xl md:rounded-3xl lg:rounded-full ">
      <div className="w-full px-2 sm:px-6 lg:pr-2 lg:pl-10">
        <div className="relative flex items-center justify-between  h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          {/* Hamburger menu on the right */}
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700  "
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`hamburger-icon block h-6 w-6 transition-transform duration-200 ${isOpen ? 'transform rotate-45' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex   items-center justify-evenly space-x-8">
            <Link href="/">
              <span className="text-white    text-xs font-normal">
                HOME
              </span>
            </Link>
            <Link href="/about">
              <span className="text-white   text-xs font-normal">
                BATTREGEN PROPIETARY
              </span>
            </Link>
            <Link href="/">
              <span className="text-white    text-xs font-normal">
                SOLUTIONS
              </span>
            </Link>
            <Link href="/">
              <span className="text-white  text-xs font-normal">
                CAREERS
              </span>
            </Link>
            <Link href="/">
              <span className="text-white  text-xs font-normal">
                GALLERY
              </span>
            </Link>
           
            
          </div>

          <div className="hidden lg:block">
          <Link href="/registration" passHref>
              <button className="bg-brandwhite  px-4 py-2  text-xs font-medium  text-brandblack bg-brandgreen rounded-full">
                 CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"} lg:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="block text-white px-3 py-2  text-xs font-normal">
              HOME
            </span>
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="block text-white px-3 py-2  text-xs font-normal">
              BATTREGEN PROPIETARY
            </span>
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="block text-white px-3 py-2  text-xs font-normal">
              SOLUTIONS
            </span>
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="block text-white px-3 py-2 rounded-md text-xs font-normal">
              CAREERS
            </span>
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="block text-white px-3 py-2 rounded-md text-xs font-normal">
              GALLERY
            </span>
          </Link>
         
          <Link href="/registration" passHref onClick={() => setIsOpen(false)}>
            <button className="block w-full text-left bg-brandwhite px-4 py-2 border-brandwhite text-xs font-medium text-brandblack bg-brandgreen rounded-full mt-4">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </nav>

    </div>
    
  );
};

export default Navbar;
