import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setSmall } from "../../redux/sliceMore";

const SLideBarButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const small = useAppSelector((e) => e.more.small);
  return (
    <button
      onClick={() => {
        dispatch(setSmall(!small));
      }}
      className="absolute right-0 top-[50%] translate-x-[50%] translate-y-[50%] rounded-[4px] bg-[#e6b628] px-[3px] py-[7px] text-[#fff] outline-none duration-500 hover:bg-[#ea580c]"
    >
      {small ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
};

export default SLideBarButton;
