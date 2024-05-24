import React from "react";
import { listMenu, serviceTeacher } from "../../mock/listexam";
import MenuSubItem from "../../components/menusub/MenuSubItem";
import { serviceMenu } from "../../mock/listexam";
import MenuSubBtn from "../../components/menusub/MenuSubBtn";
import { useAppSelector } from "../../redux/store";

const MenuSub: React.FC = () => {
  const submenu = useAppSelector((e) => e.more.submenu);
  return (
    <>
      {submenu && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[999998] items-end bg-[#94a3b882] sm:flex xl:hidden"></div>
      )}

      <div
        style={{
          transform: submenu ? "translateY(0%)" : "translateY(100%)",
        }}
        className="fixed bottom-0 z-[999999] w-full bg-[#f1f5f9] px-[20px] py-[20px] duration-300 sm:block xl:hidden"
      >
        <p className="mb-[10px] ml-[16px] text-[20px] font-[700]">Thêm</p>
        <div className="flex flex-col">
          {listMenu.map((e) => e.id > 3 && <MenuSubItem key={e.id} data={e} />)}
          {serviceMenu.map((e) => (
            <MenuSubItem key={e.id} data={e} />
          ))}
          {serviceTeacher.map((e) => (
            <MenuSubItem key={e.id} data={e} />
          ))}
        </div>
        <MenuSubBtn />
      </div>
    </>
  );
};

export default MenuSub;
