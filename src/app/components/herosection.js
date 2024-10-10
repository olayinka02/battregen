"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useRouter } from 'next/navigation';

const HeroSection = ({ heroTitle, paragraph, imageSrc, buttonOne, buttonTwo, headercolor, textcolor,backgroundcolor,paddingBottom }) => {

  const scrollToBottom = () => {
   scroll.scrollToBottom();
  };
  
  return (
    <div className={`w-full flex justify-center lg:herobanner pb-48 lg:pb-18  md:pb-44 lg:mb-0 md:h-auto ${backgroundcolor}`}>
      <div className="hero-section grid grid-cols-1  md:grid-cols-2 w-full md:w-4/5 lg:pb-2 pt-2 md:pt-7 px-4 md:px-0">
        <div className="col-span-1 pt-2 lg:pt-8">
          <h1 className={`text-3xl font-bold mb-4 leading-normal ${headercolor}`}>{heroTitle}</h1>
          <p className={`text-sm mb-6 leading-relaxed ${textcolor}`}>{paragraph}</p>
          <div className="flex space-x-4">
            {buttonOne && (
              
                <button onClick={scrollToBottom} className="text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen " >
                 {buttonOne.text}
                </button>
             
            )}
            {buttonTwo && (
              <Link href={buttonTwo.link}>
                <button className="bg-black text-white px-4 py-3 rounded-full text-xs">
                  {buttonTwo.text}
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-1">
          {imageSrc && (
            <div className=" flex justify-center">
              <Image src={imageSrc} alt={heroTitle}  />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
