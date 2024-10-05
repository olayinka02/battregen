"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import footerlogo from "../assets/footerlogo.png";
import { animateScroll as scroll } from 'react-scroll';
import callicon from "../assets/callicon.svg";
import mailicon from "../assets/mailicon.svg"; // You might want to use this later

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='w-full flex flex-col lg:gap-4 relative bg-white py-5 lg:pt-28 text-black h-auto'>
      {/* Image Gallery */}
      <div className='grid grid-cols lg:grid-cols-2 gap-10 px-4 pb-10 lg:px-28'>
        <div className='flex flex-col'>
          <div className='grid lg:grid-cols-2 lg:gap-4 text-xs'>
            <ul className='hidden lg:flex flex-col lg:gap-4 md:flex-col md:gap-4'>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/">BATTREGEN PROPIETARY</Link></li>
              <li><Link href="/">SOLUTION</Link></li>
            </ul>
            <ul className='hidden lg:flex flex-col lg:gap-4 md:flex-col md:gap-4'>
              <li><Link href="/">CAREERS</Link></li>
              <li><Link href="/">GALLERY</Link></li>
            </ul>
          </div>

          <div className='pt-16 lg:w-4/5'>
            <Image src={footerlogo} alt="Footer Logo" />
            <div className='text-xs mt-4 leading-6'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className='flex items-center text-xs gap-3 pt-7'>
            <Image src={callicon} alt="Call Icon" />
            <p className=''>08114563366</p>
            <Image src={mailicon} alt="Call Icon" />
            <p className=''>info@battregen.com</p>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <h1 className='text-3xl pb-8 font-medium'>Leave your details and we will get back to you shortly!</h1>

          <form className='flex flex-col gap-3'>
            <label htmlFor="name" className='text-xs pb-1'>Name</label>
            <input type="text" id="name" className='mb-2 p-2 rounded border border-inputfieldstroke bg-inputfield text-inputfieldtext' placeholder='Your Name' required />

            <label htmlFor="email" className='text-xs pb-1'>Email</label>
            <input type="email" id="email" className='mb-2 p-2 rounded border border-inputfieldstroke bg-inputfield text-inputfieldtext' placeholder='Your Email' required />

            <label htmlFor="phone" className='text-xs pb-1'>Phone Number</label>
            <input type="text" id="phone" className='mb-2 p-2 rounded border border-inputfieldstroke bg-inputfield text-inputfieldtext' placeholder='Your Phone Number' required />

            <button type="submit" className="flex-nowrap text-white px-4 py-3 rounded-full text-xs w-28 bg-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className='flex items-center justify-center lg:justify-start lg:pl-32 lg:pt-0 text-sm'>
        <p>Copyright © Day2DayPro 2022. All rights reserved</p>
      </div>

      <button onClick={scrollToTop} className="absolute bottom-1 left-1 " aria-label="Scroll to top">
        <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="61" height="61" rx="30.5" fill="#292929" />
          <rect x="1.44545" y="1.44545" width="62.1091" height="62.1091" rx="31.0545" stroke="#5F7495" strokeOpacity="0.8" strokeWidth="1.10909" />
          <path d="M32.4212 45.6187V19.4407M32.4212 19.4407L42.238 29.2574M32.4212 19.4407L22.6045 29.2574" stroke="white" strokeWidth="2.10727" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default Footer;
