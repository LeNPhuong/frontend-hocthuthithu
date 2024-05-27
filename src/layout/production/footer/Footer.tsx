import React from "react";
import { useAppSelector } from "../../../redux/store";
import { FaCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  const small = useAppSelector((e) => e.more.small);
  return (
    <div className="flex flex-col items-center border-t-[1px] border-t-[#cbd5e1] py-[10px]">
      <p className="whitespace-nowrap text-center text-[14px] text-[#64748b]">
        {small ? <FaCopyright /> : "Bản quyền này thuộc về"}
      </p>
      <p className="whitespace-nowrap text-center text-[14px] text-[#e6b628]">
        {small ? "CĐ Học sinh" : "Cộng đồng học sinh"}
      </p>
    </div>
  );
};

export default Footer;
