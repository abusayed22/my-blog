import React, { useEffect } from "react";
import Hero from "../../components/home/Hero";
import Cart from "../../components/home/Cart";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import fetchBlog from "../../redux/allBlog/thunk/fetchBlog";

function Home() {

  const blogs = useSelector(state => state.allBlog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog)
  }, [dispatch]);

  console.log(blogs)
  return (
    <div className="bg-black">
      <Hero />
      <br />
      <p className="text-xl font-extrabold text-green border-b text-center">
        ALL Blogs
      </p>

      <div className="w-[90%] mx-auto">
        <div className="flex flex-shrink flex-wrap justify-evenly">
          {blogs?.map(single =>
            <Cart blog={single} key={single.id} />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Pagination count={10} color="secondary" />
      </div>
    </div>
  );
}

export default Home;
