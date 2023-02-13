import React, { useEffect, useState } from "react";
import Hero from "../../components/home/Hero";
import Cart from "../../components/home/Cart";
import { useDispatch, useSelector } from "react-redux";
import fetchBlog from "../../redux/allBlog/thunk/fetchBlog";
import Paginations from "../../utils/loader/Paginations";

function Home() {

  const {blogs,isLoading,isError} = useSelector(state => state.allBlog?.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog)
    
  }, [dispatch]);

  // pagination functional
  // const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(3);

  const indexOfLastBlog = currentPage * blogPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage
  const currentBlog = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="bg-black">
      <Hero />
      <br />
      <p className="text-xl font-extrabold text-green border-b text-center">
        ALL Blogs
      </p>

      <div className="w-[90%] mx-auto">
        <div className="flex flex-shrink flex-wrap justify-evenly">
          {isLoading && !isError ? (<Cart blogs={currentBlog} loading={isLoading} />) : (<Cart blogs={currentBlog} />)}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Paginations
          blogPerPage={blogPerPage}
          totalBlogs={blogs?.length}
          paginate={paginate} 
          currentPage={currentPage}
          />
      </div>
      {/* <Pagination count={blogs?.length} /> */}
    </div>
  );
}

export default Home;
