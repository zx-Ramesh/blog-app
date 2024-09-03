import React from "react";
import { AllAuthorDetails } from "../../../typings";
import BlogCard from "../BlogCard";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";


export type authorData = {
  authorDetails: AllAuthorDetails;
};

const AuthorPage = ({ authorDetails }: authorData) => {
  // console.log("authorPageDetails", authorDetails);

  return (
    <>
      <div className="mt-7 bg-Primary-2 dark:bg-dark-4 rounded-md">
        <div className=" w-2/5  m-auto  flex flex-col items-center ">
          <div className="p-5  flex flex-row items-center ">
            <div className="h-20 w-20">
              <Image
                width={1000}
                height={1000}

                className="rounded-full !h-16 !w-16 "
                src={urlForImage(authorDetails?.image)?.url()}
                alt=""
              />
            </div>


            <div className=" pl-3">
              <h1 className=" text-xl font-medium">{authorDetails.name}</h1>
              <p className="font-normal text-sm text-Primary-4">
                {authorDetails.designation}
              </p>
            </div>
          </div>
          <div className="w-full ">
            <p className="font-normal text-lg text-Primary break-words text-center">
              {authorDetails.bio} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi aperiam nisi laudantium
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="font-bold text-xl">Latest Post</h1>
        <div className="grid grid-cols-4 gap-5">
          {
            authorDetails.blogs.map((eachblog) => (
              <BlogCard key={eachblog.title} eachblog={eachblog} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default AuthorPage;
