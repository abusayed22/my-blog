import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { search } from "../../redux/blogFilter/action";
import { useMatch, useNavigate } from "react-router-dom";

function InputModal({ inputToggled, toggledHandler }) {
  const dispatch = useDispatch();

  const match = useMatch("/")
  const navigate = useNavigate()

  const [input, setInput] = useState('')

  const onChangeHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(search(input));
    if(!match) {
      navigate("/")
    }
  }
  return (
    inputToggled && (
      <div className="flex">
        <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange= {onChangeHandler}
          className="h-10 border select-all selection:text-yellow border-gray w-[300px] ml-4 focus:text-rose md:w-[500px] outline-none p-1"
        />
        </form>
        <CloseIcon
          onClick={toggledHandler}
          className="bg-yellow hover:text-[#ffff]"
        />
      </div>
    )
  );
}

export default InputModal;
