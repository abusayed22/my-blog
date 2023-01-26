import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function ModalNav({ toggled, toggledHandler, catagory }) {
    return (
        toggled && (
            
            <div>
                <div className="overflow-hidden bg-[#595c61] p-2 w-80 top-[-100px] mt-[-140px] ">
                        <CloseIcon onClick={toggledHandler()} className="bg-yellow hover:text-[#ffff]" />

                    <ul className="flex flex-col items-center mt-5 w-72 bg-white">
                        {catagory.map((list) => (
                            <Link
                            to={`${list.cat}`}
                                key={list.id}
                                className=" hover:shadow-red w-72 h-10 mt-4 shadow-lg font-bold text-center hover:text-red"
                                >
                                {list.cat}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        )
    );
}

export default ModalNav;
