import { useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import WriteComment from "./WriteComment";


function Comments({open}) {
  const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
  const {id} = blog || {}
   return (
    open && (
      <div className="w-[100%] md:w-[50%] mx-auto rounded-2xl border border-white shadow-black p-1  flex flex-col items-center justify-center">
      <div className="mx-auto w-[100%]">
        <WriteComment id={id}/>
      </div>
      <div className="overflow-y-auto h-auto snap-y w-[100%]">
        <SingleComment />
      </div>
    </div>
    )
  );
}

export default Comments;