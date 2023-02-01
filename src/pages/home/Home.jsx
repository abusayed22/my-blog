import React from "react";
import Hero from "../../components/home/Hero";
import Cart from "../../components/home/Cart";
import { Pagination } from "@mui/material";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <br />
      {/* <Zoom> */}
        <p className="text-xl font-extrabold text-green border-b text-center">
          ALL Blogs
        </p>
      {/* </Zoom> */}
      {/* <Tagging /> */}
      {/* <Fade bottom> */}
        <div className="flex flex-wrap justify-around ">
          <Cart />
        </div>
      {/* </Fade> */}
      <div className="flex justify-center mt-5">
        <Pagination count={10} color="secondary" />
      </div>
    </div>
  );
}

export default Home;
