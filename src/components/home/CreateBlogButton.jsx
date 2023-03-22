import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";
import blogCreate from "../../assets/svg/noun-create-blog-3152624.svg";

function CreateBlogButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const openHandler = () => {
    handleOpen();
  };

  // ====== for conditional checking
  const isChecked = useAuthChecked();
  // ======= is checked
  const createBlog = () => {
    if (isChecked) {
      navigate("/createBlog");
    } else {
      navigate("/login");
    }
  };

  return (
    <button onClick={createBlog} className="fixed right-8 hover:scale-105">
      <button className="animate-bounce overflow-hidden w-[40px] md:w-[50px] lg:w-[60px] h-[40px] md:h-[50px] lg:h-[60px] bg-yellow hover:ring ring-green transition rounded-full p-2 hover:text-yellow">
        <img src={blogCreate} width="50px" alt="" />
      </button>
    </button>
  );
}
export default CreateBlogButton;
