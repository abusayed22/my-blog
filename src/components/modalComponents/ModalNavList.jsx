import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removed_tag, tag_select } from "../../redux/blogFilter/action";

function ModalNavList({ list }) {

    const { tags: selectedTag } = useSelector(state => state?.filterBlog);

    const ifSlected = selectedTag.includes(list) ? true : false;

    const dispatch = useDispatch();

    const tagSelectHandler = () => {
        if (!ifSlected) {
            dispatch(tag_select(list));
        } else {
            dispatch(removed_tag(list));
        }
    };



    return (
        <>
            <div
                onClick={() => tagSelectHandler()}
                to={`${list.cat}`}
                className=" w-60 hover:shadow-red w-72 h-7 mt-3 shadow-lg font-extralight text-center hover:text-red"
            >
                {list.cat}
            </div>
        </>
    )
}

export default ModalNavList;