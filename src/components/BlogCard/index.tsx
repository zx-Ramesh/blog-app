import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'


const BlogCard = ({ eachblog }: { eachblog: Blog }) => {
  // console.log({_eachblog:eachblog})
  return (
    <div className='mt-5 rounded-lg border-[1px] border-gray-400 p-4 w-["392px"] h-["488px"] gap-4 flex flex-col justify-between dark:border-slate-800  bg-white dark:bg-transparent'>
      <div className="rounded-lg object-fill h-[300px] w-full border border-red-600 relative ">
        <Image
          src={urlForImage(eachblog.image)}
          fill
          alt='blog-image'
        /></div>
      <div className="h-2/6">
        <button className="rounded-lg text-blue-700 text-sm font-medium">
          {eachblog.tag}
        </button>
        <p className="font-semibold whitespace-break-spaces text-2xl">
          {eachblog.title}
        </p>
      </div>

      <div className='flex gap-3 items-center'>
        <Image
          src={urlForImage(eachblog.author?.image)}
          width={30}
          height={30}
          alt='blog-image'
          className="rounded-lg object-fill"
        />
        <p className="text-base font-medium ">{eachblog.author?.name}</p>
        <p className="text-base font-medium ">30/8/24</p>
      </div>
    </div>
  )
}

export default BlogCard