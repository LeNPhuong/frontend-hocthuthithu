import React from "react";
import { serviceMenu } from "../../mock/listexam";
import SlideBarItems from "../../components/slidebar/SlideBarItems";

const SlideBarService: React.FC = () => {
  return (
    <div className="flex flex-col">
      {serviceMenu.map((e) => (
        <SlideBarItems key={e.id} data={e} />
      ))}
    </div>
  );
};

export default SlideBarService;
