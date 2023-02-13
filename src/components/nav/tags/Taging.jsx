import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";

 function Taging({catagroy}) {

    // const dispatch = useDispatch();

    // useEffect(() => {

    // }, [dispatch]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
                    {catagroy}
                </div>
            </div>
        </>
    );
}

export default Taging;