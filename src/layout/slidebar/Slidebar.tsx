import React, { useEffect, useState } from "react";
import SlideBarContainer from "./SlideBarContainer";
import Footer from "../footer/Footer";
import SLideBarButton from "../../components/slidebar/SLideBarButton";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setSmall } from "../../redux/sliceMore";

const Slidebar: React.FC = () => {
  const [autosmall, setAutoSmall] = useState<boolean>(true);
  const small: boolean = useAppSelector((e) => e.more.small);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function checksize() {
      const width = window.innerWidth;
      if (width < 1400) {
        dispatch(setSmall(true));
        setAutoSmall((e) => (e = false));
      } else if (width > 1400) {
        setAutoSmall((e) => (e = true));
      }
    }
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  }, [autosmall]);

  return (
    <div
      className="duration-200 sm:hidden xl:block"
      style={{ width: small ? "100px" : "250px" }}
    >
      <div className="relative flex h-full w-full flex-col border-[1px] border-r-[1px] border-r-[#cbd5e1] bg-[#f1f5f9]">
        {autosmall && <SLideBarButton />}
        <SlideBarContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Slidebar;
