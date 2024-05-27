import React from "react";
import { datamenu } from "../../mock/listexam";
import { Link, useLocation } from "react-router-dom";

const NavItem: React.FC<{ data: datamenu }> = ({ data }) => {
  const url = useLocation().pathname;
  return (
    <Link
      style={{
        background: url.includes(data.route)
          ? "linear-gradient(to bottom,#bfdbfe, transparent)"
          : "",
        color: url.includes(data.route) ? "#2563eb" : "",
      }}
      to={data.route}
      className="flex w-full cursor-pointer flex-col items-center justify-center py-[15px] text-[#688d97]"
    >
      <span className="sm:text-[18px] md:text-[22px] lg:text-[28px]">
        {data.icons}
      </span>
      <span className="mt-[5px] font-[600] capitalize sm:text-[10px] md:text-[13px] lg:text-[16px]">
        {data.name}
      </span>
    </Link>
  );
};

export default NavItem;
