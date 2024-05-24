import React from "react";
import HeaderRanking from "../../components/header/HeaderRanking";
import HeaderBrnAcount from "../../components/header/HeaderBtnAcount";
import { Link } from "react-router-dom";

const Header_Content: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between h-full">
      <Link
        className="min-w-[100px] max-w-[100px] sm:visible xl:invisible"
        to=""
      >
        <img
          className="max-h-[55px] min-h-[55px] sm:block xl:hidden"
          src="/src/assets/logo/Education small.png"
          alt=""
        />
      </Link>
      <div className="flex flex-row flex-wrap items-center justify-end gap-[4px]">
        <HeaderRanking />
        <HeaderBrnAcount />
      </div>
    </div>
  );
};

export default Header_Content;
