import React from "react";
import bg_video from "../../assets/videos/Pexels Videos 1851768.mp4";

function Hero() {
  return (
    <div className="relative">
      <video
        src={bg_video}
        autoPlay
        // loop
        muted
        width="100%"
        className="clip object-cover w-[100%] h-[50vh] md:h-[80vh]"
      />
      
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="h-[100%] flex flex-col items-center justify-center">
        <h2 className="font-serif text-4xl text-red ">My Blog</h2>
        <p className="font-sans text-lg text-yellow">
          Show your passinate words..
        </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
