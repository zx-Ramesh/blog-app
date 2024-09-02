"use client"
import React from 'react'
import { Blog } from '../../../typings'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from "@portabletext/react";
import { dateConvert } from '../../../constant';

type blogdetailProps = {
  blogdetails: Blog
}

const BlogPage = ({blogdetails}:blogdetailProps) => {
  console.log("DetailsFetch:",blogdetails)
  return (
    // <h1>hi</h1>
    <div className="w-4/6 m-auto mt-10 ">
      <div className="">
        <button className="rounded-lg text-white bg-blue-700 py-1 px-2 mb-2 text-sm font-medium">
          {blogdetails.tag}
        </button>{" "}
        <h1 className="text-2xl font-bold whitespace-break-spaces">
          {blogdetails.title}
        </h1>
      </div>
      <div className="w-1/3 flex pt-3 justify-between  items-center  text-Primary-3">
        <div className="flex  items-center ">
          <img
            className="rounded-full h-6 w-6"
            src={urlForImage(blogdetails?.author?.image)?.url() || ''}
            alt=""
          />

            <h1 className="text-xs pl-3 hover:underline">
              {blogdetails.author?.name}
            </h1>

        </div>
        <p className="text-[10px] font-bold">
          {dateConvert(blogdetails._createdAt)}
        </p>
      </div>

      <img
        className=" w-full h-96 object-fill rounded-lg mt-5"
        src={urlForImage(blogdetails?.image)?.url() || ''}
        alt=""
      />

      <section
        className="mt-5
      prose-h3:font-semibold prose-h3:text-xl prose-h3:my-3
      prose-p:text-Primary dark:prose-p:text-dark-6 prose-p:font-normal prose-p:text-sm
      "
      >
        <PortableText value={blogdetails.content} />
      </section>
    </div>
  )
}

export default BlogPage;





