import React from "react";
import Slidebar from "../../layout/slidebar/Slidebar";
import NavBottom from "../../layout/navbottom/NavBottom";
import MenuSub from "../../layout/menusub/MenuSub";
import Main from "../../layout/main/Main";
import Header from "../../layout/header/Header";

const Production: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-row overflow-hidden">
      <Slidebar />
      <NavBottom />
      <MenuSub />
      <div className="flex-[1_1]">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Production;
