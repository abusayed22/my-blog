import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function InputModal({ inputToggled,toggledHandler }) {
  return (
    inputToggled && (
      <div className="flex">
        <input
          type="text"
          className="h-10 border border-gray w-[380px] focus:text-rose md:w-[500px] outline-none p-1"
        />
        <CloseIcon
          onClick={toggledHandler}
          className="bg-yellow hover:text-[#ffff]"
        />
      </div>
    )
  );
}

export default InputModal;
