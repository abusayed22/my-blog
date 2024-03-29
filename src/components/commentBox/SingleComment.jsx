import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import commentDelete from "../../redux/allBlog/thunk/commentRelated/commentDeleted";
import commentEditUpdated from "../../redux/allBlog/thunk/commentRelated/commentEditUpdated";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";

function SingleComment() {
  const { blog, isLoading, isError } = useSelector(
    (state) => state.allBlog.blog
  );
  const {
    id,
    title,
    description,
    name,
    email,
    professional,
    proTitle,
    date,
    duration,
    views,
    link,
    thumbnail,
    tags,
    like,
    comments,
  } = blog || {};
  const { user } = useSelector((state) => state.user);
  const { email: userEmail, token } = user;
  const isChecked = useAuthChecked();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editable, setEditable] = useState(false);
  const [editedObj, setEditedObj] = useState();


  // ====== delete comment
  const deleteCommentHandler = (deleteId) => {
    if (isChecked) {
      const newComments = comments.filter((com) => com.id !== deleteId);
      const deletedObject = {
        id,
        title,
        description,
        name,
        email,
        professional,
        proTitle,
        date,
        duration,
        views,
        tags,
        like,
        thumbnail,
        link,
        comments: newComments,
      };
      dispatch(commentDelete(id, deletedObject));
    }
  };

  // ======== edit comment
  const commentEditHandler = (id) => {
    setEditable(true);

    comments?.map((single) => {
      if (single.id === id) {
        setInput(single.com);
        setEditedObj(single);
      }
    });
  };

  // ====== editing submit handler
  const editSubmitHandler = (e) => {
    e.preventDefault();
    const newObj = comments?.map((s) => {
      if (s.id === editedObj.id) {
        s.com = input;
      }
      return s;
    });
    const editObject = {
      id,
      name,
      title,
      description,
      date,
      duration,
      views,
      email,
      tags,
      link,
      thumbnail,
      like,
      comments: newObj,
    };
    dispatch(commentEditUpdated(id, editObject));
    setEditable(false);
  };

  return (
    <>
      {/* component */}
      <div className=" snap-center overflow-hidden rounded-lg  shadow-md m-5">
        {editable ? (
          <form onSubmit={editSubmitHandler}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-screen h-auto"
            />
          </form>
        ) : (
          <table className="w-full h-auto bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">{/* Header of the table */}</thead>
            {comments?.map((s) => (
              <tbody
                key={s.i}
                className="divide-y divide-gray-100  rounded-xl "
              >
                <hr />
                <tr className=" hover:bg-[#C8D2D1] transition">
                  <span className="text-center text-gray border-b-gray mt-1">
                    {s?.date}
                  </span>
                  <span>{s.name}</span>
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-gray" />
                    </div>
                  </th>
                  <td className=" lg:px-6 py-1 lg:py-4">
                    <div className="flex gap-1 md:gap-2">
                      <b className="w-[100%] sm:text-left md:text-sm lg:text-sm md:text-justify text-blue md:text-black flex md:flex-none items-center h-20 md:h-auto overflow-auto bg-violet-50 text-[10px] lg:text-md xl:font-extrabold text-violet-600">
                        {s.com}
                      </b>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {s.whoCom === userEmail ? (
                      <div className="flex justify-end gap-2 md:gap-4">
                        <div
                          onClick={() => deleteCommentHandler(s.id)}
                          className="cursor-pointer"
                          x-data="{ tooltip: 'Delete' }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                        <div
                          onClick={() => commentEditHandler(s.id)}
                          className="cursor-pointer"
                          x-data="{ tooltip: 'Edite' }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : null}

                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </>
  );
}
export default SingleComment;
