import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import test from "../../assets//images/busness.jpg";
import Cart from "../../components/home/Cart";
import AuthorsVideos from "./AuthorsVideos";
// import Zoom from "react-reveal/Zoom";

function Author() {

  const {blogs,isLoading,isError} = useSelector(state => state.allBlog?.blogs);
  
  return (
    <div className="dark:bg-black">
      <div className=" border-gray bg-white dark:bg-[#53657e] bg w-[] h-[400px] mx-auto shadow-2xl  rounded-3xl p-6 shadow-[#365314]">
        <div className="flex justify-center py-2 bg-green w-[215px] h-[215px] rounded-full mx-auto shadow-deep">
          <Avatar
            alt="Remy Sharp"
            src={test}
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <div className="flex flex-col items-center my-3">
          <b className="text-xl">Name: </b>
          <b className="text-lg py-1">propreson: </b>
          <b className="text-lg py-1">tittle </b>
        </div>
      </div>

      <div className="mt-10">
      {/* <Zoom> */}
        <p className="text-xl font-extrabold text-green border-b text-center">
          Name's Blog
        </p>
      {/* </Zoom> */}
      </div>
      <div className="flex flex-wrap justify-center space-x-5">
        {/* // TODO: */}
        <AuthorsVideos />
        <AuthorsVideos />
        <AuthorsVideos />
      </div>
      
    </div>
  );
}

export default Author;
