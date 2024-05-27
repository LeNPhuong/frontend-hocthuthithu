import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const SlideBarItems: React.FC<{
  data: { id: number; name: string; icons: any; route: string };
}> = ({ data }) => {
  const small = useAppSelector((e) => e.more.small);
  const url = useLocation().pathname;

  return (
    <Link
      to={data.route}
      className="my-[3px] w-full overflow-hidden px-[15px] py-[3px]"
    >
      <div
        style={{
          justifyContent: small ? "center" : "start",
          background: url.includes(data.route) ? "#e6b628" : "",
          color: url.includes(data.route) ? "#f8fafc" : "",
        }}
        className="flex h-[40px] flex-row items-center gap-[10px] overflow-hidden rounded-[8px] px-[10px] text-[#688d97] duration-500 hover:bg-[#e6b628] hover:text-[#f8fafc]"
      >
        <span className="text-[22px]">{data.icons}</span>
        <span
          style={{ display: small ? "none" : "block" }}
          className="block min-w-[100px] whitespace-nowrap text-[14px] font-[600] capitalize"
        >
          {data.name}
        </span>
      </div>
    </Link>
  );
};

export default SlideBarItems;
