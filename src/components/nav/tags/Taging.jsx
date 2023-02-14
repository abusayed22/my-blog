import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Taging({ catagroy }) {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch]);
    console.log(catagroy);
    return (
        <>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex  border-b overflow-y-auto">
                <div className="bg-yellow text-blue-600 px-4 py-1 rounded-full cursor-pointer text-blue">
                    {catagroy}
                </div>
            </div>
        </>
    );
}

export default Taging;