import moment from "moment/moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import commentPost from "../../redux/allBlog/thunk/commentRelated/commentPost";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";
import { uniqueId } from "../../utils/randomIdcreate/UniqeId";
import FormikLogin from "../../pages/login/FormikLogin";

function WriteComment({ id: blogId }) {
  const { blog, isLoading, isError } = useSelector(
    (state) => state.allBlog.blog
  );
  const { user } = useSelector(state => state.user);
  const {email:userEmail} = user
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    id,
    title,
    description,
    author,
    date,
    duration,
    email,
    views,
    tags,
    link,
    thumbnail,
    like,
    comments,
  } = blog || {};

  const [isOpen, setIsOpen] = useState(false);
  const isChecked = useAuthChecked();
  // comment submit handler & more functionality for valid user
  const submitHandler = (e) => {
    e.preventDefault();
    if (isChecked) {
      const commentObj = {
        id,
        title,
        description,
        author,
        date,
        duration,
        views,
        email,
        tags,
        link,
        thumbnail,
        like,
        comments: [
          ...comments,
          {
            id: uniqueId(),
            com: input,
            whoCom: userEmail,
            date: moment(Date.now()).format("MMM Do YY"),
          },
        ],
      };
      dispatch(commentPost({ id, commentObj }));
      setInput("");
    } else {
      navigate("/login");
    }
  };

  return (
    <form action="" onSubmit={submitHandler}>
      {isOpen && <FormikLogin />}

      <input
        type="text"
        className="w-[100%] rounded-lg outline-none px-6 py-2 mx-auto shadow-inner"
        maxLength={99}
        placeholder={"Type yor comment..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default WriteComment;
