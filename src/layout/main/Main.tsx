import React from "react";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div className="h-full w-full overflow-auto">
      {/* <div className="h-[2000px]">1</div> */}
      <Outlet />
    </div>
  );
};

export default Main;
