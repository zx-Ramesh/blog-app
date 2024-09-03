"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { Blog } from "../../../typings";

type Searchprop = {
  data: Blog[];
};

const SearchComponent = ({ data }: Searchprop) => {
  const [input, setInput] = useState<string>("");

  const router = useRouter();
  const searchedBlog = (slug: string) => {
    router.push(`/blog/${slug}`);
    setInput("");
  };

  return (
    <div className="z-10 p-3">
      <input
        className="bg-Primary-1 dark:bg-dark-4 py-2 px-4 rounded-md relative"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      {input.length > 0 && (
        <ul className="absolute w-64 mt-1 rounded-lg bg-white dark:bg-dark-2">
          {data
            ?.filter((blog) => {
              return blog.title.toLowerCase().includes(input);
            })
            .map((blog) => (
              <li
                key={blog.slug}
                onClick={() => searchedBlog(blog.slug)}
                className="flex items-center cursor-pointer bg-Primary-2 dark:bg-dark py-1 px-2 text-xs font-medium hover:bg-Primary-3 dark:hover:bg-dark-3"
              >
                <CiSearch className="w-2/12" size={20} />{" "}
                <span className="w-10/12">{blog.title}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
