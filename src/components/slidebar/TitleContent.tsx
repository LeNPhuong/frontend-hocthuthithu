import React, { ReactNode } from "react";
import { useAppSelector } from "../../redux/store";

const TitleContent: React.FC<{ title: string; icons: ReactNode }> = ({
  title,
  icons,
}) => {
  const small = useAppSelector((e) => e.more.small);
  return (
    <div className="px-[16px] py-[10px] text-[14px] font-[600] uppercase text-[#147cf6]">
      <div
        style={{ justifyContent: small ? "center" : "start" }}
        className="flex flex-row items-center gap-[10px] whitespace-nowrap border-y-[1px] border-y-[#cbd5e1] py-[10px]"
      >
        <span className="text-[22px]">{icons}</span>
        {small ? null : title}
      </div>
    </div>
  );
};

export default TitleContent;
