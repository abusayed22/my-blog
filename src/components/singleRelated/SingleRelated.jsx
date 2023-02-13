import React from "react";
// import test from "../../assets/images/tecnology.jpg";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import HomeLoaderCard from "../loader/HomeLoaderCard";

function SingleRelated({ blogs:relatedBlogs  }) {
const {blogs, isLoading,isError} = relatedBlogs

  if(blogs?.length > 0) {
    if (isLoading) {
      return (
        <>
          {blogs?.map(s => (
            <HomeLoaderCard key={s.id} />
          ))}
  
        </>
      )
    } else {
      return (
        <>
          {blogs?.map(s => (
            <div key={s.id} className="rounded-lg mt-5 dark:bg-[#f30b0ba8] bg-[#f4f7fa] w-[420px] md:w-[380px] space-y-4 h-[500px] opacity- flex flex-col items-center justify-center shadow-down shadow-xl">
              <img src={s.thumbnail} alt="test" className="opacity-75 w-[380px] h-60 mb-5" />
              <div className="flex flex-col space-y-3">
                <b className="text-clip p-5 text-center font-extrabold select-text selection:text-green">
                  {s.title}
                </b>
                <div className="mx-auto">
                  <Link
                    to={`/single/${s.id}`}
                    className="my-6 border border-white transition hover:border-[#818cf8]  shadow-sm hover:shadow-[#818cf8] hover:shadow-md px-5 py-2 text-blue rounded-md"
                  >
                    View..
                  </Link>
                </div>
                <Link to={"/author"} className="mx-auto flex space-x-2 p-2 ">
                  <Avatar
                    alt={s.author}
                    src={s.avatar}
                    sx={{ width: 56, height: 56 }}
                  />
                  <div>
                    <Link to={"/author"} className="text-lg transform hover:underline text-green">
                      {s.author}
                    </Link>
                    <p className="text-[13px] text-white">a day ago</p>
                    <span className=" text-gray">{s.date}</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
  
        </>
      );
    }
  
  }else {
    return (<>
    <div>No Blog...</div>
    </>)
  }


}

export default SingleRelated;