import React from 'react';
import Link from "next/link";
import Image from "next/image";
import gallery1 from "../assets/gallery1.svg";
import gallery2 from "../assets/gallery2.svg";
import gallery3 from "../assets/gallery3.svg";
import gallery4 from "../assets/gallery4.svg"; // Assuming this is the same image for demonstration

function Gallery() {
  return (
    <div className='w-full flex flex-col gap-4 bg-brandblack py-28 text-white h-auto'>
        <div className='grid grid-cols-1 px-4 lg:gap-10 lg:px-28 md:px-20 md:grid-cols-2 md:gap-8 lg:grid-cols-2 justify-center'>
            <div className='flex flex-col'>
                <h1 className='text-3xl'>Gallery</h1>
                <p className='text-xs font-extralight pt-3'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='flex flex-col lg:items-end md:items-end pt-4'>
                <Link href="/">
                    <button className="text-brandblack px-4 py-3 rounded-full text-xs bg-brandgreen">
                        VIEW GALLERY
                    </button>
                </Link>
            </div>
        </div>

        {/* Image Gallery */}
        <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 px-4 lg:px-28 md:px-20 py-4'>
            <div className='flex flex-col'>
                <h1 className='text-xs pb-2'>Before revitalization</h1>
                <Image src={gallery1} alt="Gallery Image 1" />
            </div>
            <div className='flex flex-col'>
                <h1 className='pb-2  text-xs '>After revitalization </h1>
                <Image src={gallery2} alt="Gallery Image 2" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-xs  pb-2 '></h1>
                <Image src={gallery3} alt="Gallery Image 3" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-xs'></h1>
                <Image src={gallery4} alt="Gallery Image 4" />
            </div>
        </div>
    </div>
  );
}

export default Gallery;
