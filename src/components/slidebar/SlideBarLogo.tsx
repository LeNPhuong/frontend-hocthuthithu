import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const SlideBarLogo: React.FC = () => {
  const small: boolean = useAppSelector((e) => e.more.small);
  return (
    <Link
      className="flex flex-row items-center px-[10px] py-[20px] outline-none"
      to=""
    >
      {small ? (
        <img
          className="h-[45px]"
          src="/src/assets/logo/Education small.png"
          alt=""
        />
      ) : (
        <img
          className="h-[55px]"
          src="/src/assets/logo/Education big.png"
          alt=""
        />
      )}
    </Link>
  );
};

export default SlideBarLogo;
