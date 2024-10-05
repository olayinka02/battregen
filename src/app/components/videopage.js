import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoComponent = () => {
  return (
    <div className="flex items-center justify-center w-full px-6  pt-1 mt-1 absolute top-full md:top-48 lg:top-80 z-10 lg:pt-60  mb-72 md:tb-96 md:pt-56">
      <div className="flex items-center justify-center w-full mt-10 lg:w-4/5   bg-brandblack h-80  lg:h-96 rounded-3xl ">
        <iframe
          className="w-full h-full rounded-3xl "
          src="https://www.youtube.com/embed/zHFd_Zpf03k?si=oTDV9OsTX6ykljEM"  // Replace with your YouTube video ID
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <button className="absolute bg-red-500 p-4 rounded-full shadow-lg hover:shadow-xl">
          <FontAwesomeIcon 
            icon={faPlay} 
            className="text-white text-4xl" 
          />
        </button> */}
      </div>
    </div>
  );
};

export default VideoComponent;
