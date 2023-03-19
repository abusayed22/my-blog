import React, { useEffect, useState } from "react";
import { Avatar, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import singleBlogFetch from "../../redux/allBlog/thunk/singleBlogFetch";
import { Link, useParams } from "react-router-dom";
import HomeLoaderCard from "../../components/loader/HomeLoaderCard";
import relatedBlog from '../../redux/allBlog/thunk/relatedBlog'
import SingleRelated from "../../components/singleRelated/SingleRelated";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Comments from "../../components/commentBox/Comments";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import ScroolProgrees from "../../utils/loader/ScroolProgrees";
import likeIcone from "../../assets/svg/free_icon_1.svg"

import LikeDislike from "../../components/like/LikeDislike";

function SingleBlog() {
  const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
  const blogs = useSelector(state => state.allBlog.related);
  const { user } = useSelector(state => state.user)
  // console.log(user);
  const { id } = useParams();
  const { id: aID, title, description, name, email, professional, proTitle, date, link, thumbnail, tags, like, comments } = blog || {}

  // const {name,Email,professional} = author
  

  // state for toggle of comment modal
  const [open, setOpen] = useState(false);
  const [liker, setLiker] = useState(false)

  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(singleBlogFetch(id))
  }, [dispatch, id]);




  useEffect(() => {
    dispatch(relatedBlog({ tags, aID }))
  }, [aID, tags, dispatch])

  const loading = blogs?.isLoading

  // toggle controller
  const toggleHandler = () => {
    setOpen((open) => !open)
  }



  if (!isError && loading) {
    return (<>
      <div className="dark:bg-black">
        <div className="w-[80%] h-[60vh] mx-auto bg-[#383737] animate-pulse">
        </div>
        <br />
        <div className=" flex ">
          <div className="flex flex-col justify-center items-center w-[20%] space-y-1">
            <Avatar src="" alt="" className=" animate-pulse " />
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
            paginations
          </div>
        </div>
      </div>
    </>)
  } else {
    return (
      <div className="dark:bg-black bg-[#E1D5D9]">
        <ScroolProgrees />
        <div>
          <img src={thumbnail} alt={name} className="w-[75%] h-[60vh] mx-auto shadow-deep " />
        </div>
        <br />
        <div className="flex flex-col justify-center items-center md:flex ">
          <div className="flex flex-col items-center md:w-[18%] w-[50%]  space-y-1">
            <Avatar src={link} alt={name} />
            <p className="text-gray ">{name}</p>
          </div>
          <div className="w-[92%] p-5 bg-[#AAABA8] rounded-lg">
            <p
              left
              className="w-[100%] mx-auto indent-12 selection:text-green shadow-deep bg-[#f4f7fa] first-letter:text-yellow first-letter:text-2xl text-justify dark:text-green dark:selection:text-yellow brightness-100 dark:bg-[#a51515a8] rounded-sm p-5"
            >
              {description}
            </p>
            <br />
            <div className="w-[40%] mx-auto space-x-4 text-red dark:selection:text-yellow flex justify-around">
              <LikeDislike />
              <div className="flex flex-col">
              <b className="w-40 text-yellow text-xl font-bold text-center">{`${comments?.length } ${comments?.length > 0 ? ("Comment's"): ("Comment")}`}</b>
            
              <b onClick={toggleHandler} className="w-40 text-blue text-xl font-bold transition text-center cursor-pointer">Write Comment{open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </b>
              </div>
            </div>
            <br />
            <Comments open={open} />
          </div>

        </div>
        <br />
        <div>
          <p className="mx-auto text-2xl w-40 border-b-4 dark:text-white text-green">
            Related Blogs
          </p>
          <div className="flex flex-wrap justify-center space-x-5">
            <SingleRelated blogs={blogs} />
          </div>
          <div className="flex justify-center mt-10">

          </div>
          
        </div>
      </div>
    );
  }

}

export default SingleBlog;
