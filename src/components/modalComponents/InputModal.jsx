import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { search } from "../../redux/blogFilter/action";

function InputModal({ inputToggled, toggledHandler }) {
  const dispatch = useDispatch();

  const [input, setInput] = useState('')
  

  useEffect(() => {
     function debounce (fnc, delay) {
      let timeoutId;
      return () => {
        if(timeoutId) {
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
          fnc()
        }, delay);
      }
      
    }
    return debounce
  },[])

  
  const onChangeHandler = (e) => {

    // debounce(setInput(e.target.value),3000)
    
  }
  console.log(input);

  useEffect(() => {
    dispatch(search(input))
  },[dispatch,input])


  // useEffect(() => {
  //   let ifTimeOut
  //   if(ifTimeOut) {
  //     clearTimeout(ifTimeOut)
  //   }
  //    ifTimeOut = setTimeout(() => {
  //     dispatch(search(input))
  //   }, 3000);

  //   // return clearTimeout(timeset)
    
  // },[dispatch,input])

  // const debouncFunc = debounce(updateQuery,5000)
  return (
    inputToggled && (
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange= {onChangeHandler}
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
