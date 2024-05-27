import React from "react";

const PageBuilding: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-[50px]">
      <img src="/src/assets/logo/repair.png" className="max-w-[150px]" alt="" />
      <div className="mt-[20px] text-center font-[600] text-[#e6b628] sm:text-[16px] md:text-[18px] lg:text-[22px]">
        Chức năng này đang được xây dựng !
      </div>
    </div>
  );
};

export default PageBuilding;
