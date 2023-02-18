const commentPost = ({id,comment}) => async(dispatch) => {
    const res = await post(`http://localhost:9000/videos2${id}`);
}

export default commentPost;