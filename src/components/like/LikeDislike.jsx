import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import doLikeThunk from "../../redux/allBlog/thunk/likeThunk/doLikeTHunk";
import { useAuthChecked } from "../../utils/hooks/useAuthChecked";
import { useNavigate } from "react-router-dom";

function LikeDislike() {
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
    link,
    thumbnail,
    tags,
    like,
    comments,
  } = blog || {};
  const { user } = useSelector((state) => state.user);
  const { email:userEmail } = user;
  const dispatch = useDispatch();
  const [likedThey, setLikedThey] = useState([]);
  // const [userEmail, setUserEmail] = useState(user?.email);
  const [authLiked,setauthLiked] = useState()

  // ==== is checking for conditional like
  const isChecked = useAuthChecked();
  useEffect(() => {
    setLikedThey(like);
    if (likedThey?.includes(userEmail)) {
      setauthLiked(true);
    } else {
      setauthLiked(false);
    }
  }, [like, userEmail, likedThey]);

  // const [likeAseKina, seLikeAseKina] = useState();
  const navigate = useNavigate();

  // ==== like handler
  const onLikeHandler = () => {
    if (isChecked) {
      if (!authLiked) {
        setLikedThey(likedThey?.concat(userEmail));
        const likedObject = {
          id,
          title,
          description,
          name,
          email,
          professional,
          proTitle,
          date,
          link,
          thumbnail,
          tags,
          like: like.concat(userEmail),
          comments,
        };
        setauthLiked(true);
        dispatch(doLikeThunk(id, likedObject));
      } else {
        const index = likedThey?.indexOf(userEmail);
        if (index !== -1) {
          const newThey = likedThey?.splice(index, 1);
          setLikedThey([newThey]);
        }
        const unLikedObject = {
          id,
          title,
          description,
          name,
          email,
          professional,
          proTitle,
          date,
          link,
          thumbnail,
          tags,
          like: likedThey,
          comments,
        };
        dispatch(doLikeThunk(id, unLikedObject));
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-[50px] text-center">
      <b className="text-yellow text-xl text-center">{likedThey?.length}</b>
      <br />
      <div className="">
        <button
          onClick={onLikeHandler}
          className="text-rose text-center font-bold"
        >
          {authLiked ? <FavoriteIcon /> : <FavoriteTwoToneIcon />}
        </button>
      </div>
    </div>
  );
}

export default LikeDislike;
