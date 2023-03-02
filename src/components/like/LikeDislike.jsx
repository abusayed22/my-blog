import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import doLikeThunk from "../../redux/allBlog/thunk/likeThunk/doLikeTHunk";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";
import { useNavigate } from "react-router-dom";


function LikeDislike() {
    const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
    const { id, title, description, name, Email, professional, proTitle, date, link, thumbnail, tags, like, comments } = blog || {}



    const { user } = useSelector(state => state.user)
    const { email } = user
    const dispatch = useDispatch();
    const [likedThey, setLikedThey] = useState([]);
    const [userEmail, setUserEmail] = useState(user?.email)
    // const [isLike,setIsLike] = useState(false)
    // const [likeController,setLikeController] = useState(false)

    useEffect(() => {
        setLikedThey(like)
        console.log('first');
    }, [like])

    // const [doLike, setDoLike] = useState(false);
    // const [doDisLike, setDoDislike] = useState(false);
    const [likeAseKina, seLikeAseKina] = useState();
    const isChecked = useAuthChecked();
    const navigate = useNavigate()

    
    // on like handler
    useEffect(() => {
        console.log('1');
        if (likedThey?.includes(userEmail)) {
            seLikeAseKina(true);
            console.log('2');
        } else {
            seLikeAseKina(false)
            console.log('3');
        }
    }, [likedThey,userEmail]);
   
    console.log('importent');
    console.log(likeAseKina);

    // like handler
    const onLikeHandler = () => {
        

        if (isChecked) {
            if (!likeAseKina) {
                setLikedThey(likedThey?.concat(email))
                const likedObject = {
                    id,
                    title,
                    description,
                    name,
                    Email,
                    professional,
                    proTitle,
                    date,
                    link,
                    thumbnail,
                    tags,
                    like:like.concat(userEmail),
                    comments
                }
                seLikeAseKina(true)
                dispatch(doLikeThunk(id, likedObject))
            } else {
                const index = likedThey?.indexOf(userEmail);
                if(index !== -1) {
                    const newThey = likedThey?.splice(index,1)
                    setLikedThey([newThey])
                }
                const unLikedObject = {
                    id,
                    title,
                    description,
                    name,
                    Email,
                    professional,
                    proTitle,
                    date,
                    link,
                    thumbnail,
                    tags,
                    like: likedThey,
                    comments

                }

                dispatch(doLikeThunk(id,unLikedObject))
            }
        } else {
            navigate('/login')
        }


    }

    



    return (<div className="w-[50px] text-center">
        <b className="text-yellow text-xl text-center">{likedThey?.length}</b>
        <br />
        <div className="">
            <button onClick={onLikeHandler} className="text-rose text-center font-bold">
                {likeAseKina ? (<FavoriteIcon />) : (<FavoriteTwoToneIcon />)}
            </button>
        </div>
    </div>)
}

export default LikeDislike;
// const array = ['apple', 'banana', 'orange', 'pear'];
// const index = array.indexOf('orange'); // Find the index of the element to remove
// if (index !== -1) { // Make sure the element exists in the array
//   array.splice(index, 1); // Remove the element at the found index
// }
// console.log(array);