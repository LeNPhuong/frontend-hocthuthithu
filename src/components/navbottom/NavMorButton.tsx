import React from "react";
import { CgMenuRound } from "react-icons/cg";
import { useAppDispatch } from "../../redux/store";
import { setSubmenu } from "../../redux/sliceMore";

const NavMorButton: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setSubmenu(true));
      }}
      className="flex w-full cursor-pointer flex-col items-center justify-center py-[15px] text-[#688d97]"
    >
      <span className="sm:text-[18px] md:text-[22px] lg:text-[28px]">
        <CgMenuRound />
      </span>
      <span className="mt-[5px] font-[600] capitalize sm:text-[10px] md:text-[13px] lg:text-[16px]">
        Thêm
      </span>
    </div>
  );
};

export default NavMorButton;
