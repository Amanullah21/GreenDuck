import React from "react";
import { FaTh, FaUserAlt, FaThList, FaRegUser, FaUsers } from "react-icons/fa";

const MenuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaTh />,
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    icon: <FaThList />,
  },
  {
    path: "/about",
    name: "About",
    icon: <FaUserAlt />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <FaUsers />,
  },
  {
    path: "/register",
    name: "Register",
    icon: <FaRegUser />,
  },
];

export { MenuItem };
