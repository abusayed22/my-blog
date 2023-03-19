import { Link, useNavigate } from "react-router-dom";
import blogCreate from "../../assets/svg/noun-create-blog-3152624.svg";
import { useState } from "react";
import CreateBlog from "../../pages/createBlog/CreateBlog";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";

function CreateBlogButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const openHandler = () => {
    handleOpen()
  };
  const isChecked = useAuthChecked();

  const createBlog = () => {
    if(isChecked) {
      navigate('/createBlog')
    } else {
      navigate('/login')
    }
  }

  return (
    <button onClick={createBlog} className="fixed right-8 hover:scale-105">
      <button className="animate-bounce overflow-hidden w-[60px] h-[60px] bg-yellow hover:ring ring-green transition rounded-full p-2 hover:text-yellow">
        <img src={blogCreate} width="50px" alt="" />
        
      </button>
    </button>
  );
}
export default CreateBlogButton;
