import React from "react";
import { Blog } from "../../../typings";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { dateConvert } from "../../../constant";


const HeroSection = async () => {
  const query = `*[_type=='blog'] |order(_createdAt desc) {
    tag,
    title,
    image,
    author,
    "slug":slug.current,
    author->{name,image},
    content,
    _createdAt,
  }[1]`
  
  const oneBlog:Blog = await client.fetch(query);

  // console.log("HeroSection Blogssssssssssssss", oneBlog)
  return (
    <div className="mt-7 relative ">
      <Image
        height={1000}
        width={1000}
        src={urlForImage(oneBlog.image).url() || ""}
        alt="image here"
        className="!w-full !h-1/5 object-fill rounded-lg"
      />
      <div className="h-44 w-80  rounded-lg border-[1px]  border-gray-400  bg-white dark:bg-dark dark:border-slate-700 p-4 absolute -bottom-10 left-10">
        <div className="">
          <button className="rounded-lg text-white bg-blue-700 py-1 px-2 mb-2 text-sm font-medium">
            {oneBlog?.tag}
          </button>
          <h1 className="text-base font-bold whitespace-break-spaces">
            {oneBlog?.title}
          </h1>
        </div>

        <div className="w-3/5  flex pt-3 justify-between items-center  text-Primary-3">
          <Image
            height={1000}
            width={1000}
            className="rounded-full h-6 w-6"
            src={urlForImage(oneBlog?.author?.image).url() || ""}
            alt=""
          />
          <h1 className="text-xs ">{oneBlog.author?.name}</h1>
          <p className="text-[10px] font-bold">{dateConvert(oneBlog._createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
