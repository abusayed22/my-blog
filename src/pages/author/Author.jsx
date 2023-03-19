import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import test from "../../assets//images/busness.jpg";
import Cart from "../../components/home/Cart";
import singleBlogFetch from "../../redux/allBlog/thunk/singleBlogFetch";
import authorThunk from "../../redux/authorRelated/authorTHunk/authorThunk";
import OwnVideos from "./OwnVideos";
import PublicVideos from "./PublicVideos";


function Author() {
  const {blog,isLoading,isError} = useSelector(state => state.allBlog?.blog);
  const {authorOf,isLoading:authLoading,isError:authErrr} = useSelector(state => state.author);
  const { user, isLoading:userLoaging, isError:userError } = useSelector((state) => state.user);

  const [isAuth, setIsAuth] = useState(false);
  const authEmail = user?.email

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleBlogFetch(id))
  }, [dispatch,id]);



  

  const { id: aID, title, description, name, Email, professional, proTitle, date, link, thumbnail, tags, like, comments } = blog || {}
  
   // silen fetching author's data
   useEffect(() => {
    dispatch(authorThunk(Email))
  },[dispatch,Email]);

   // own conditon with useEffect
 useEffect(() => {
  if(authEmail === Email) {
    setIsAuth(true)
  }
 },[Email,authEmail])


  return (
    <div className="dark:bg-black">
      <div className=" border-gray bg-white dark:bg-[#53657e] bg w-[] h-[400px] mx-auto shadow-2xl  rounded-3xl p-6 shadow-[#365314]">
        <div className="flex justify-center py-2 bg-green w-[215px] h-[215px] rounded-full mx-auto shadow-deep">
          <Avatar
            alt="Remy Sharp"
            src={link}
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <div className="flex flex-col items-center my-3">
          <b className="text-xl">{name} </b>
          <b className="text-lg py-1">{professional} </b>
          <b className="text-lg py-1">{proTitle} </b>
        </div>
      </div>

      <div className="mt-10">
      {/* <Zoom> */}
        <p className="text-xl font-extrabold text-green border-b text-center">
        {name}'s Blog
        </p>
      {/* </Zoom> */}
      </div>
      <div className="flex flex-wrap justify-center space-x-5">
        {
          // authLoading ?  <center>Loading...</center> : ({
          //   isAuth ? (): ''
          // })
          isAuth ? <OwnVideos author={authorOf}/> : <PublicVideos />
        }
        
      </div>
      
    </div>
  );
}

export default Author;
