import moment from 'moment/moment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForUtills from '../../pages/login/LoginForUtils';
import commentPost from '../../redux/allBlog/thunk/commentPost/commentPost';
import { useAuthChecked } from '../../utils/hooks/useAuthChecked';

function WriteComment({ id: blogId }) {

  const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, description, author, date, duration, views, tags, link, thumbnail, like, comments } = blog || {}

  const [isOpen, setIsOpen] = useState(false)
  const isChecked = useAuthChecked();
  // comment submit hadler & more functionality for valid user
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
        tags,
        link,
        thumbnail,
        like,
        comments: [
          ...comments,
          { com: input, date: moment(Date.now()).format("MMM Do YY") }
        ]
      }
      dispatch(commentPost({ id, commentObj }))
      setInput('')
    } else {
      setIsOpen(true)
    }
  }

  return (
    <form action=""
      onSubmit={submitHandler}
    >
      {isOpen && <LoginForUtills />}

      <input
        type="text"
        className='w-[100%] rounded-lg outline-none px-6 py-2 mx-auto shadow-inner'
        maxLength={99}
        placeholder={'Type yor comment...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

    </form>
  );
}


export default WriteComment;