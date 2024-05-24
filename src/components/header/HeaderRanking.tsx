import React from "react";
import { Link } from "react-router-dom";

const HeaderRanking: React.FC = () => {
  return (
    <Link to="">
      <div className="relative rounded-full bg-[#e2e8f0] font-[600] text-[#147cf6] duration-300 hover:bg-[#cbd5e1] sm:px-0 sm:py-0 sm:pl-0 md:px-[6px] md:py-[6px] md:pl-[26px] md:text-[12px] lg:px-[10px] lg:py-[7px] lg:pl-[29px] lg:text-[14px]">
        <span className="sm:hidden md:block">
          Các bạn có điểm cộng dồn cao nhất
        </span>
        <div className="sm:relative sm:left-auto sm:top-auto sm:translate-y-0 md:absolute md:left-[-3%] md:top-[50%] md:translate-y-[-50%] lg:left-[-6%]">
          <img
            className="sm:h-[30px] lg:h-[40px]"
            src="/src/assets/logo/rank.png"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default HeaderRanking;
