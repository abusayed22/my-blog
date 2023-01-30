import React from "react";
import Hero from "../../components/home/Hero";
import Tagging from "../../components/home/Tagging";
import Cart from "../../components/home/Cart";
import { Pagination } from "@mui/material";

function Home() {
  return (
    <div>
      <Hero />
      <br />
      <h1 className="text-xl font-extrabold text-green border-b text-center">
        ALL Blogs
      </h1>
      {/* <Tagging /> */}
      <div className="flex flex-wrap justify-around ">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
     
    </div>
  );
}

export default Home;
