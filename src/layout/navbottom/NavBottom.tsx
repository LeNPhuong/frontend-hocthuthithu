import React from "react";
import NavContainer from "./NavContainer";

const NavBottom: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#f1f5f9] p-[5px] sm:block xl:hidden">
      <NavContainer />
    </div>
  );
};

export default NavBottom;
