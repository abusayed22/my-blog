import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import doLikeThunk from "../../redux/allBlog/thunk/likeThunk/doLikeTHunk";


function LikeDislike() {
    const { blog, isLoading, isError } = useSelector(state => state.allBlog.blog);
    const {id, title, description, name, Email, professional, proTitle, date, link, thumbnail, tags, like, comments } = blog || {}
    const liked = like?.count;
    const inLiked = like?.liker
    const test = like?.length
    console.log(test)

    const { user } = useSelector(state => state.user)
    const { email } = user
    const dispatch = useDispatch();
    const [likedThey, setLikedThey] = useState([]);
    // const [isLike,setIsLike] = useState(false)
    // const [likeController,setLikeController] = useState(false)
    
    console.log(likedThey)

    useEffect(() => {
        setLikedThey(like)
    }, [like])

    const [doLike, setDoLike] = useState(false);
    const [doDisLike, setDoDislike] = useState(false);

    const [likeAseKina,seLikeAseKina] = useState()

    useEffect(() => {

        // if (doLike) {
        //     // dispatch(doLikeThunk({aID,likedObject}))
        //     console.log(`like ${doLike}`);
        // } else {
        //     // dispatch(doLikeThunk({aID,likedObject}))
        //     console.log(`unlike ${doLike}`);
        // }
    }, [doLike])

// on like handler
useEffect(() => {
    if(likedThey?.includes(email)){
        seLikeAseKina(true)
    } else {
        seLikeAseKina(false)
        
    }
}, [likedThey,email])

console.log(likedThey);

    const onLikeHandler = () => {
        
        if (!likeAseKina) {
            // setLikedThey(likedThey[0]?.concat(email))
                    // console.log(likedThey[0]);
                    const likedObject = {
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
                        like: like.concat(email),
                        comments
        
                    }
                    // setLikedThey(...likedThey,email)
                    dispatch(doLikeThunk(id,likedObject))
                } else {
                     console.log('hi');
                    // const index = likedThey?.indexOf(email);
                    // if(index !== -1) {
                    //     const newThey = likedThey?.splice(index,1)
                    //     setLikedThey([newThey])
                    // }
                    // const unLikedObject = {
                    //     id,
                    //     title,
                    //     description,
                    //     name,
                    //     Email,
                    //     professional,
                    //     proTitle,
                    //     date,
                    //     link,
                    //     thumbnail,
                    //     tags,
                    //     like: {
                    //         count: likeCount,
                    //         liker: [
                    //             ...likedThey
                    //         ]
                    //     },
                    //     comments
        
                    // }
        
                    // dispatch(doLikeThunk({id,unLikedObject}))
                }

        // if (doLike) { //like deya ase
        //     setDoLike(false);
        //     setLikeCount(likeCount - 1)
        // } else { //like hobe
        //     setDoLike(true);
        //     setLikeCount(likeCount + 1);
        //     if (doDisLike) {
        //         setDoDislike(false);

        //     }
        // }
    }

    // checking is liked
    // useEffect(() => {

    //     if (likedThey?.includes(email)) {
    //         console.log('hello');
    //         const likedObject = {
    //             id,
    //             title,
    //             description,
    //             name,
    //             Email,
    //             professional,
    //             proTitle,
    //             date,
    //             link,
    //             thumbnail,
    //             tags,
    //             like: {
    //                 count: likeCount,
    //                 liker: [
    //                     ...likedThey,
    //                     email
    //                 ]
    //             },
    //             comments

    //         }
    //         setDoLike(true)
    //         setLikedThey(...likedThey,email)
    //         dispatch(doLikeThunk({id,likedObject}))
    //     } else {
    //          console.log('hi');
    //         const index = likedThey?.indexOf(email);
    //         if(index !== -1) {
    //             const newThey = likedThey?.splice(index,1)
    //             setLikedThey([newThey])
    //         }
    //         const unLikedObject = {
    //             id,
    //             title,
    //             description,
    //             name,
    //             Email,
    //             professional,
    //             proTitle,
    //             date,
    //             link,
    //             thumbnail,
    //             tags,
    //             like: {
    //                 count: likeCount,
    //                 liker: [
    //                     ...likedThey
    //                 ]
    //             },
    //             comments

    //         }

    //         dispatch(doLikeThunk({id,unLikedObject}))
    //     }

    // }, [email, inLiked])

    return (<div className="w-[50px] text-center">
        <b className="text-yellow text-xl text-center">{like?.length}</b>
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