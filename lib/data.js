import {
  CircleUserIcon,
  CreditCardIcon,
  MapPinIcon,
  NotebookIcon,
} from "lucide-react";

export const sidebarItems = [
  // {
  //   title: "Main",
  //   url: "/dashboard",
  //   icon: HomeIcon,
  // },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: CircleUserIcon,
  },
  {
    title: "Bank Cards",
    url: "/dashboard/cards",
    icon: CreditCardIcon,
  },
  // {
  //   title: "Notes",
  //   url: "/dashboard/notes",
  //   icon: NotebookIcon,
  // },
  // {
  //   title: "Address",
  //   url: "/dashboard/address",
  //   icon: MapPinIcon,
  // },
];

export const looper = (lenght) => Array(lenght || 5).fill("");
