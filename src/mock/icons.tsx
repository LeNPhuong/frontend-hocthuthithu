import { ReactNode } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelp } from "react-icons/io";
import { PiChalkboardTeacherFill } from "react-icons/pi";

export const iconsdata: {
  setting: ReactNode;
  help: ReactNode;
  teacher: ReactNode;
} = {
  setting: <IoSettingsOutline />,
  help: <IoMdHelp />,
  teacher: <PiChalkboardTeacherFill />,
};
