import React, { useEffect } from "react";
import { Avatar, Pagination } from "@mui/material";
import Cart from "../../components/home/Cart";
import { useDispatch, useSelector } from "react-redux";
import singleBlogFetch from "../../redux/allBlog/thunk/singleBlogFetch";
import { useParams } from "react-router-dom";


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
        <div>
          <img src={thumbnail} alt={author} className="w-[100%] h-[60vh]" />
        </div>
        <br />
        <div className="flex">
          <div className="flex flex-col justify-center items-center w-[20%] space-y-1">
            <Avatar src="" alt="" />
            <b>{author}</b>
            <p>{'A GOOD TEACHER'}</p>
            <p>{"Passionate Programmer"}</p>
          </div>
          <div className="w-[80%] p-5">
            <p
              left
              className="indent-12 selection:text-green first-letter:text-red first-letter:text-2xl text-justify dark:text-green dark:selection:text-yellow "
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
            <Cart />
            <Cart />
            <Cart />
            <Cart />
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
          <img src={thumbnail} alt={author} className="w-[100%] h-[60vh]" />
        </div>
        <br />
        <div className="flex">
          <div className="flex flex-col justify-center items-center w-[20%] space-y-1">
            <Avatar src="" alt="" />
            <b>{author}</b>
            <p>{'A GOOD TEACHER'}</p>
            <p>{"Passionate Programmer"}</p>
          </div>
          <div className="w-[80%] p-5">
            <p
              left
              className="indent-12 selection:text-green first-letter:text-red first-letter:text-2xl text-justify dark:text-green dark:selection:text-yellow "
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
            <Cart />
            <Cart />
            <Cart />
            <Cart />
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
