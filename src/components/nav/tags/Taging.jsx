import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, tag_select } from "../../../redux/blogFilter/action";

function Taging({ tag }) {

    const dispatch = useDispatch();
    const {tags: selectedTag,search: searchValue} = useSelector(state => state?.filterBlog);

    // useEffect(() => {

    // }, [dispatch]);

    const tagSelectHandler = () => {
        dispatch(tag_select(selectedTag))
        dispatch(search("hello"))
        console.log(selectedTag);
        console.log(searchValue)
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex  overflow-y-auto">
                <div onClick={() =>tagSelectHandler()} className=" bg-yellow text-blue-600 px-4 py-1 rounded-full cursor-pointer text-blue">
                    {tag}
                </div>
            </div>
        </>
    );
}

export default Taging;