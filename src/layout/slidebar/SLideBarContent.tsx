import React from "react";
import SlideBarLogo from "../../components/slidebar/SlideBarLogo";
import SlideBarList from "./SlideBarList";
import TitleContent from "../../components/slidebar/TitleContent";
import { iconsdata } from "../../mock/icons";
import SlideBarTeacher from "./SlideBarTeacher";

const SLideBarContent: React.FC = () => {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="flex flex-col overflow-y-auto"
    >
      <SlideBarLogo />
      <TitleContent title="chức năng cơ bản" icons={iconsdata.setting} />
      <SlideBarList />
      <SlideBarTeacher />
    </div>
  );
};

export default SLideBarContent;
