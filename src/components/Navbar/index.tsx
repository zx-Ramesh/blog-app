import React from "react";
import LogSvg from "../UI/Icons";
import Link from "next/link";
import DarkModeSwitch from "../UI/DarkModeSwitch";

const Navbar = () => {
  const listOfMenu = [
    { text: "Home", route: "/" },
    { text: "Blog", route: "/" },
    { text: "Single Post", route: "/" },
    { text: "pages", route: "/" },
    { text: "Home", route: "/" },
  ];
  return (
    <div className="flex justify-between items-center py-4">
      <LogSvg />
      <ul className="flex justify-between w-2/5 items-center">
        {listOfMenu.map((eachMenu, i) => {
          return (
            <Link href={eachMenu.route} key={i}>
              <li className="cursor-pointer">{eachMenu.text}</li>
            </Link>
          );
        })}
      </ul>
      <input type="text" className="bg-[#F4F4F5] py-2 px-3 outline-none" placeholder="Search"  />
      <DarkModeSwitch />
    </div>
  );
};

export default Navbar;
