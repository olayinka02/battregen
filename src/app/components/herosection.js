import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ heroTitle, paragraph, imageSrc, buttonOne, buttonTwo, headercolor }) => {
  return (
    <div className="w-full flex justify-center herobanner mb-48 lg:pb-10 md:pb-10 md:mb-1 lg:mb-0 md:h-auto ">
         <div className="hero-section grid grid-cols-1   md:grid-cols-2  w-full md:w-4/5 md:pb-44 pt-2 md:pt-7 px-4 md:px-0" >
        <div className="col-span-1 pt-20  lg:pt-28">
        <h1 className={`text-3xl font-bold mb-4 leading-normal ${headercolor}`}>{heroTitle}</h1>
      <p className="text-sm mb-6 leading-relaxed">{paragraph}</p>
      <div className="flex space-x-4">
        {buttonOne && (
          <Link href={buttonOne.link}>
            <button className=" text-brandblack px-4 py-3 rounded-full text-xs bg-textgreen">
              {buttonOne.text}
            </button>
          </Link>
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
        <div className="mb-4 flex justify-center">
          <Image src={imageSrc} alt={heroTitle} width={600} height={400} />
        </div>
      )}
        </div>
     
     
    </div>
    </div>
   
  );
};

export default HeroSection;
