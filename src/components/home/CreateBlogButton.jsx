import { Link } from 'react-router-dom';
import blogCreate from '../../assets/svg/noun-create-blog-3152624.svg'
function CreateBlogButton () {

    return(<Link to={'/createBlog'} className='fixed right-8 hover:scale-105'>
        <button  className='animate-bounce overflow-hidden w-[60px] h-[60px] bg-yellow hover:ring ring-green transition rounded-full p-2 hover:text-yellow'>
            <img src={blogCreate} width='50px' alt="" />
        </button>
    </Link>)
}
export default CreateBlogButton;