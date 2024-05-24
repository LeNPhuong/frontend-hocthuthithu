import React from "react";
import { listMenu } from "../../mock/listexam";
import SlideBarItems from "../../components/slidebar/SlideBarItems";

const SlideBarList: React.FC = () => {
  return (
    <div className="flex flex-col">
      {listMenu.map((e) => (
        <SlideBarItems key={e.id} data={e} />
      ))}
    </div>
  );
};

export default SlideBarList;
