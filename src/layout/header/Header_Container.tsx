import React from "react";
import Header_Content from "./Header_Content";

const Header_Container: React.FC = () => {
  return (
    <div className="py-[10px] sm:px-[6px] sm:py-[5px] lg:px-[20px] h-full">
      <Header_Content />
    </div>
  );
};

export default Header_Container;
