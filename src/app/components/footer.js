import React from 'react';
import Link from "next/link";
import Image from "next/image";
import footerlogo from "../assets/footerlogo.png";
import callicon from "../assets/callicon.svg";
import mailicon from "../assets/mailicon.svg";

function Footer() {
  return (
    <div className='w-full flex flex-col lg:gap-4 bg-white py-8 lg:pt-28   text-black h-auto'>
        {/* Image Gallery */}
        <div className='grid grid-cols lg:grid-cols-2 gap-10 px-4 pb-10 lg:px-28 '>
            <div className='flex flex-col '>
                <div className='grid lg:grid-cols-2 lg:gap-4 text-xs'>
                    <ul className='hidden lg:flex flex-col lg:gap-4 md:flex-col md:gap-4 '>
                        <li>HOME</li>
                        <li>BATTREGEN PROPIETARY</li>
                        <li>SOLUTION</li>
                    </ul>
                    <ul className='hidden lg:flex flex-col lg:gap-4 md:flex-col md:gap-4 '>
                        <li>CAREERS</li>
                        <li>GALLERY </li>
                    </ul>
                </div>
                <div className='grid  lg:hidden text-xs'>
                    <ul className='grid gap-3'>
                        <li>HOME</li>
                        <li>BATTREGEN PROPIETARY</li>
                        <li>SOLUTION</li>
                        <li>CAREERS</li>
                        <li>GALLERY </li>
                    </ul>
                    
                </div>
                
                <div className='pt-16 lg:w-4/5 '>
                    <Image src={footerlogo} alt="Footer Logo" className=' ' />
                  
                        <div className='text-xs mt-4 leading-6 '> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                  
                        
                       
                         
                        
                   
               
            </div>

            <div className='flex flex-col w-full '>
                <h1 className='text-3xl pb-8 font-medium'>Leave your details and we'll get back to you shortly!</h1>
                
                <form className='flex flex-col gap-3'>
                    <label htmlFor="name" className='text-xs pb-1'>Name</label>
                    <input type="text" id="name" className='mb-2 p-2 rounded border border-inputfieldstroke bg-inputfield text-inputfieldtext' placeholder='Your Name' required />

                    <label htmlFor="email" className='text-xs pb-1'>Email</label>
                    <input type="email" id="email" className='mb-2 p-2 rounded border border-inputfieldstroke bg-inputfield text-inputfieldtext' placeholder='Your Email' required />

                    <label htmlFor="phone" className='text-xs pb-1'>Phone Number</label>
                    <input type="text" id="phone" className='mb-2 p-2 rounded border border-inputfieldstroke bg-inputfield text-inputfieldtext' placeholder='Your Phone Number' required />

                    <button type="submit" className="text-white px-4 py-3 rounded-full text-xs w-28 bg-black">
                        Send Message
                    </button>
                </form>
               
            </div>
        </div>
                <div className='flex items-center justify-center lg:justify-start lg:pl-32  lg:pt-0  text-sm'>
                            <p>Copyright © Day2DayPro 2022. All rights reserved</p>
                </div>
    </div>
  );
}

export default Footer;
