"use client";
import React from "react";
import UpdatedNavBar from "./UpdatedNavBar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  const pathNameArray = ["boards-of-directors", "faqs", "contact-us"];

  const show_navbar = pathNameArray.some((ele) => {
    return pathname.includes(ele);
  });
  return <div>{show_navbar && <UpdatedNavBar textBlack />}</div>;
};

export default Navbar;
