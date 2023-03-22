import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ModalNavList from "./ModalNavList";


function ModalNav({ toggled, toggledHandler, catagory }) {

    return (
        toggled && (
            <div>
                <div className="bg-[#595c61] overflow-hidden p-2 w-60 md:w-70 top-[-100px] mt-[-140px]">
                    <CloseIcon
                        onClick={toggledHandler()}
                        className="bg-yellow hover:text-[#ffff]"
                    />

                    <ul className=" flex flex-col items-center mt-5 w-60 bg-white">
                        {catagory.map((list) => (
                            <ModalNavList key={list.id} list={list} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    );
}

export default ModalNav;
