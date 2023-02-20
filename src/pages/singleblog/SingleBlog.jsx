import React, { useEffect, useState } from "react";
import { Avatar, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import singleBlogFetch from "../../redux/allBlog/thunk/singleBlogFetch";
import { useParams } from "react-router-dom";
import HomeLoaderCard from "../../components/loader/HomeLoaderCard";
import relatedBlog from '../../redux/allBlog/thunk/relatedBlog'
import SingleRelated from "../../components/singleRelated/SingleRelated";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Comments from "../../components/commentBox/Comments";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';


function SingleBlog() {
  const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
  const blogs = useSelector(state => state.allBlog.related);
  const { id } = useParams();

  // state for toggle of comment modal
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleBlogFetch(id))
  }, [dispatch, id]);


  const { title, description, author, date, thumbnail, tags, like, comments } = blog || {}


  useEffect(() => {
    dispatch(relatedBlog({ tags, id }))
  }, [id, tags, dispatch])
  const loading = blogs?.isLoading

  // toggle controller
  const toggleHandler = () => {
    setOpen((open) => !open)
  }

  if (!isError && isLoading) {
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
      <div className="dark:bg-black">
        <div>
          <img src={thumbnail} alt={author} className="w-[75%] h-[60vh] mx-auto shadow-deep " />
        </div>
        <br />
        <div className="flex flex-col justify-center items-center md:flex ">
          <div className="flex flex-col items-center md:w-[18%] w-[50%]  space-y-1">
            <Avatar src="" alt="" />
            <b className="text-gray shadow-deep">{author}</b>
          </div>
          <div className="w-[92%] p-5 bg-gray rounded-lg">
            <p
              left
              className="w-[100%] mx-auto indent-12 selection:text-green shadow-deep bg-[#f4f7fa] first-letter:text-yellow first-letter:text-2xl text-justify dark:text-green dark:selection:text-yellow brightness-100 dark:bg-[#a51515a8] rounded-sm p-5"
            >
              {description}
            </p>
            <br />
            <div className="w-[40%] mx-auto space-x-4 text-red dark:selection:text-yellow flex justify-around">
              <span className="text-rose text-center"> <FavoriteTwoToneIcon /> {like}</span>
              <span onClick={toggleHandler} className="text-yellow hover:text-blue transition text-center cursor-pointer">{`${comments?.length} Comment`} {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </span>
            </div>
            <br />
            <Comments open={open}/>

          </div>

        </div>
        <br />
        <div>
          <p className="mx-auto text-2xl w-40 border-b-4 dark:text-white">
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
