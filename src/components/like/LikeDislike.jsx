import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';


function LikeDislike() {
    const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
    const { id: aID, title, description, name, Email, professional, proTitle, date, link, thumbnail, tags, like, comments } = blog || {}
    const liked = like?.count;
    const inLiked = like?.liker;

    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        setLikeCount(liked)
    }, [liked])
    
// console.log(liked);
// console.log(inLiked);
    const [doLike, setDoLike] = useState(false);
    const [doDisLike, setDoDislike] = useState(false);

    
    

    // on like handler
    const onLikeHandler = () => {
        if (doLike) { //like deya ase
            setDoLike(false);
            setLikeCount(likeCount - 1)
        } else { //like hobe
            setDoLike(true);
            setLikeCount(likeCount + 1);
            if (doDisLike) {
                setDoDislike(false);

            }
        }
    }



    return (<>
        <b>{likeCount}</b>
        <div className="text-rose text-center">
            <button onClick={onLikeHandler}>like</button>
            {/* <FavoriteIcon />
            <FavoriteTwoToneIcon />  */}
        </div>
    </>)
}

export default LikeDislike;