import SingleComment from "./SingleComment";
import WriteComment from "./WriteComment";


function Comments({open,blog}) {
   return (
    open && (
      <div className="w-[100%] lg:w-[70%] mx-auto rounded-2xl border border-white shadow-black p-1  flex flex-col items-center justify-center">
      <div className="mx-auto w-[100%]">
        <WriteComment />
      </div>
      <div className="overflow-y-auto h-80 snap-y ">
        <SingleComment blog={blog}/>
      </div>
    </div>
    )
  );
}

export default Comments;