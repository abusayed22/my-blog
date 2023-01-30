import React from "react";
import bg_video from "../../assets/videos/Pexels Videos 1851768.mp4";
import Loader from "../../utils/loader/Loader";

function Hero() {
  return (
    <div className="relative">
      <video
        src={bg_video}
        autoPlay
        // loop
        muted
        width="100%"
        className="object-cover h-[80vh] z-10"
      />
      <div className="absolute top-[50%] left-[35%] md:left-[45%] flex flex-col justify-center items-center">
        <h2 className="font-serif text-4xl text-red">My Blog</h2>
        <p className="font-sans text-lg text-yellow">Show your passinate content..</p>
      </div>
      {/* <Loader /> */}
    </div>
  );
}

export default Hero;
