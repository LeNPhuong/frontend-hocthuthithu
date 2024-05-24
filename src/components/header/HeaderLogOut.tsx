import React from "react";
import { IoMdLogIn } from "react-icons/io";

const HeaderLogOut: React.FC = () => {
  return (
    <div className="sm:px[6px] flex flex-row items-center rounded-[10px] border-[3px] border-[#3b82f6] bg-[#3b82f6] font-[600] capitalize text-[#f8fafc] duration-300 hover:border-[#2563eb] hover:bg-[#2563eb] active:border-[#93c5fd] sm:px-[5px] sm:py-[2px] sm:text-[10px] lg:px-[8px] lg:py-[5px] lg:text-[14px]">
      <span className="mr-[5px] text-[20px]">
        <IoMdLogIn />
      </span>
      Đăng nhập
    </div>
  );
};

export default HeaderLogOut;
