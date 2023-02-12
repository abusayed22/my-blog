import React, { useEffect } from "react";
import { Avatar, Pagination } from "@mui/material";
import Cart from "../../components/home/Cart";
import { useDispatch, useSelector } from "react-redux";
import singleBlogFetch from "../../redux/allBlog/thunk/singleBlogFetch";
import { useParams } from "react-router-dom";
import HomeLoaderCard from "../../components/loader/HomeLoaderCard";


function SingleBlog() {
  const {blog,isLoading,isError} = useSelector(state => state.allBlog.blog);
  const { id } = useParams();

  const dispatch = useDispatch();

  // TODO: why is not working
  useEffect(() => {
    dispatch(singleBlogFetch(id))
  }, [dispatch, id]);

  
  
  
  const { title, description, author, date, thumbnail } = blog || {}
  
 

  if (!isError && isLoading) {
    return (<>
      <div className="dark:bg-black">
        <div className="w-[80%] h-[60vh] mx-auto bg-[#383737] animate-pulse">
        </div>
        <br />
        <div className=" flex ">
          <div className="flex flex-col justify-center items-center w-[20%] space-y-1">
            <Avatar src="" alt=""  className=" animate-pulse "/>
            <b className="w-28 h-4 bg-[#383737] animate-pulse"></b>
            <p className="w-28 h-3 bg-[#383737] animate-pulse"></p>
            <div className="w-28 h-2 bg-[#383737] animate-pulse"></div>
          </div>
          <div className="w-[80%]">
            
              <div className="w-[92%] h-5 bg-[#383737] animate-pulse mb-2"></div>
              <div className="w-[92%] h-5 bg-[#383737] animate-pulse mb-2"></div>
              <div className="w-[92%] h-5 bg-[#383737] animate-pulse mb-2"></div>
          </div>
        </div>
        <br />
        <div>
          <p className="mx-auto text-2xl w-40 border-b-4 dark:text-white">
            Related Blogs
          </p>
          <div className="flex flex-wrap justify-center space-x-5">
              <HomeLoaderCard />
              <HomeLoaderCard />
              <HomeLoaderCard />
          </div>
          <div className="flex justify-center mt-10">
            
          </div>
        </div>
      </div>
    </>)
  } else {
    return (
      <div className="dark:bg-black">
        <div>
          <img src={thumbnail} alt={author} className="w-[75%] h-[60vh] mx-auto" />
        </div>
        <br />
        <div className="flex flex-col justify-center items-center md:flex ">
          <div className="flex flex-col justify-center items-center w-[18%] space-y-1">
            <Avatar src="" alt="" />
            <b className="text-gray">{author}</b>
          </div>
          <div className="w-[92%] p-5">
            <p type='text'
              left
              className="indent-12 selection:text-green shadow-deep first-letter:text-yellow shadow- first-letter:text-2xl text-justify dark:text-green dark:selection:text-yellow brightness-100 dark:bg-[#a51515a8] rounded-sm p-5"
            >
              {description}
            </p>
          </div>
        </div>
        <br />
        <div>
          <p className="mx-auto text-2xl w-40 border-b-4 dark:text-white">
            Related Blogs
          </p>
          <div className="flex flex-wrap justify-center space-x-5">
            <HomeLoaderCard />
            <HomeLoaderCard />
            <HomeLoaderCard />
            <HomeLoaderCard />
          </div>
          <div className="flex justify-center mt-10">
            <Pagination count={10} color="primary" />
          </div>
        </div>
      </div>
    );
  }

}

export default SingleBlog;
