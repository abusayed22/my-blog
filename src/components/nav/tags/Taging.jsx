import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removed_tag, tag_select } from "../../../redux/blogFilter/action";

function Taging({ tag }) {

    const dispatch = useDispatch();
    const { tags: selectedTag, search: searchValue } = useSelector(state => state?.filterBlog);

    const ifSlected = selectedTag.includes(tag) ? true : false;

    const tagSelectHandler = () => {
        if (!ifSlected) {
            dispatch(tag_select(tag));
        } else {
            dispatch(removed_tag(tag));
        }
    };

    const selectedStyle = ifSlected ? " bg-red text-blue-600 px-4 py-1 rounded-full cursor-pointer text-white" : " bg-yellow text-blue-600 px-4 py-1 rounded-full cursor-pointer text-blue"


    return (
        <>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex  overflow-y-auto">
                <div onClick={() => tagSelectHandler()} className={selectedStyle}>
                    {tag}
                </div>
            </div>
        </>
    );
}

export default Taging;