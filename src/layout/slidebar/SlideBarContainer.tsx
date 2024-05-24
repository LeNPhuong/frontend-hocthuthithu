import React from "react";
import SLideBarContent from "./SLideBarContent";
import TitleContent from "../../components/slidebar/TitleContent";
import { iconsdata } from "../../mock/icons";
import SlideBarService from "./SlideBarService";

const SlideBarContainer: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <SLideBarContent />
      <div className="flex-[1_1]"></div>
      <TitleContent title="Bạn có thắc mắc gì" icons={iconsdata.help} />
      <SlideBarService />
    </div>
  );
};

export default SlideBarContainer;
