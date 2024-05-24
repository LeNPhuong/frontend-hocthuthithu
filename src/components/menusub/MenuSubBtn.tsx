import React from "react";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../../redux/store";
import { setSubmenu } from "../../redux/sliceMore";

const MenuSubBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setSubmenu(false));
      }}
      className="absolute right-[20px] top-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-[#ef4444] shadow-[0_0_16px_#ccc]"
    >
      <span className="text-[18px] text-[#fff]">
        <IoMdClose />
      </span>
    </button>
  );
};

export default MenuSubBtn;
