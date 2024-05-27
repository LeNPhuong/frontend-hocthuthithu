import React, { useEffect } from "react";
import Slidebar from "../../layout/slidebar/Slidebar";
// import NavBottom from "../../layout/navbottom/NavBottom";
// import MenuSub from "../../layout/menusub/MenuSub";
import Main from "../../layout/main/Main";
// import Header from "../../layout/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import MenuSub from "../../layout/menusub/MenuSub";
// import { Header } from "antd/es/layout/layout";
import NavContents from "../../layout/navbottom/NavContents";
import NavBottom from "../../layout/navbottom/NavBottom";
import Header from "../../layout/header/Header";

const Production = () => {
  const url = useLocation().pathname;
  console.log(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (url === "/") {
      return navigate("/home");
    }
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-row overflow-hidden">
      <Slidebar />
      <NavBottom />
      {/* <NavContents /> */}
      <MenuSub />
      <div className="flex-[1_1]">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Production;
