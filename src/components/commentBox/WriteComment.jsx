import moment from 'moment/moment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commentPost from '../../redux/allBlog/thunk/commentPost/commentPost';

function WriteComment({ id: blogId }) {

  const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { id, title, description, author, date, duration, views, tags, link, thumbnail, like, comments } = blog || {}

  // comment submit hadler
  const submitHandler = (e) => {
    e.preventDefault()
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
    dispatch(commentPost({id,commentObj}))
    setInput('')
  }
  return (
    <form action=""
      onSubmit={submitHandler}
    >
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