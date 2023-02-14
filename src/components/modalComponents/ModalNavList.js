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

    const selectedStyle = ifSlected ? " bg-red text-blue-600 px-4 py-1 rounded-full cursor-pointer text-white" : "  hover:shadow-red w-72 h-10 mt-4 shadow-lg font-bold text-center hover:text-red"


    return (
        <>
            <div
                onClick={() => tagSelectHandler()}
                to={`${list.cat}`}
                className={selectedStyle}
            >
                {list.cat}
            </div>
        </>
    )
}

export default ModalNavList;