import React from "react";
import { listMenu } from "../../mock/listexam";
import NavItem from "../../components/navbottom/NavItem";
import NavMorButton from "../../components/navbottom/NavMorButton";

const NavContents: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(4,1fr)]">
      {listMenu.map((e) => e.id <= 3 && <NavItem key={e.id} data={e} />)}
      <NavMorButton />
    </div>
  );
};

export default NavContents;
