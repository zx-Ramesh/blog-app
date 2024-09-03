import React from "react";
import Link from "next/link";
import DarkModeSwitch from "../UI/DarkModeSwitch";
import { LogoSvg } from "../UI/Icons";
import { client } from "@/sanity/lib/client";
import SearchComponent from "../Search";

const Navbar = async() => {
  const listOfMenu = [
    { text: "Home", route: "/" },
    { text: "Blog", route: "/" },
    { text: "Single Post", route: "/" },
    { text: "Pages", route: "/" },
    {text:"Contact", route:"/"}
  ];

  const query = `*[_type == "blog"]{
  title,
  tag,
  image,
  "slug": slug.current,
  _createdAt,
  "author": author->{
    _id,
    name,
    image
  }
}`;


  const search = await client.fetch(query)
  // console.log("Navbaar:",search)
  return (
    <div className="flex justify-between items-center py-4">
      <LogoSvg className="dark:fill-white" />
      <ul className="flex justify-between w-2/5 items-center">
        {listOfMenu.map((eachMenu, i) => {
          return (
            <Link href={eachMenu.route} key={i}>
              <li className="font-normal text-base cursor-pointer text-Primary dark:text-dark-1">{eachMenu.text}</li>
            </Link>
          );
        })}
      </ul>
      {/* <input type="text" className="bg-[#F4F4F5] py-2 px-3 outline-none" placeholder="Search"  /> */}
      <SearchComponent data={search} />
      <DarkModeSwitch />
    </div>
  );
};

export default Navbar;
