import React from "react";
import { serviceTeacher } from "../../mock/listexam";
import SlideBarItems from "../../components/slidebar/SlideBarItems";
import TitleContent from "../../components/slidebar/TitleContent";
import { iconsdata } from "../../mock/icons";

const SlideBarTeacher: React.FC = () => {
  return (
    <div className="flex flex-col">
      <TitleContent title="Giáo viên (Đặc quyền)" icons={iconsdata.teacher} />
      {serviceTeacher.map((e) => (
        <SlideBarItems key={e.id} data={e} />
      ))}
    </div>
  );
};

export default SlideBarTeacher;
