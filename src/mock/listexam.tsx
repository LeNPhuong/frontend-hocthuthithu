import { GoHomeFill } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaToolbox } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import { MdSdStorage } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";

export interface datamenu {
  id: number;
  name: string;
  icons: any;
  route: string;
}

export const examplist: { id: number; name: string; img: string }[] = [
  { id: 1, name: "toán", img: "/src/assets/icons/math.png" },
  { id: 2, name: "lý", img: "/src/assets/icons/physic.png" },
  { id: 3, name: "hoá", img: "/src/assets/icons/chemistry.png" },
  { id: 4, name: "anh", img: "/src/assets/icons/english.png" },
];

export const listMenu: datamenu[] = [
  {
    id: 1,
    name: "trang chủ",
    icons: <GoHomeFill />,
    route: "home",
  },
  {
    id: 2,
    name: "tin tức",
    icons: <FaNewspaper />,
    route: "news",
  },
  {
    id: 3,
    name: "mục lục",
    icons: <BiSolidFoodMenu />,
    route: "category",
  },
  {
    id: 4,
    name: "công cụ",
    icons: <FaToolbox />,
    route: "tools",
  },
];

export const serviceMenu: datamenu[] = [
  { id: 1, name: "trợ giúp", icons: <FaHandsHelping />, route: "help" },
  {
    id: 2,
    name: "hướng dẫn",
    icons: <MdIntegrationInstructions />,
    route: "tutorial",
  },
];

export const serviceTeacher: datamenu[] = [
  {
    id: 1,
    name: "tạo bài kiểm tra",
    icons: <MdCreateNewFolder />,
    route: "create",
  },
  { id: 2, name: "kiểm tra", icons: <FaClipboardCheck />, route: "check" },
  { id: 3, name: "kho dữ liệu", icons: <MdSdStorage />, route: "storage" },
  { id: 4, name: "quản lý", icons: <MdLeaderboard />, route: "manage" },
];
