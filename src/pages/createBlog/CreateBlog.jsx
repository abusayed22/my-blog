import BlogForm from "../../components/create blog/BlogForm";

function CreateBlog() {

  return (
    <div className="w-screen  p-1 bg-[#6D8C00]">
      <div className="w-[70%] md:w-[50%] lg:w-[40%] bg-[#bdd986a1] rounded-lg mx-auto h-auto">
        <BlogForm />
      </div>
    </div>
  );
}
export default CreateBlog;
