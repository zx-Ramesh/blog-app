"use client"
import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { Blog } from '../../../typings'
import { useRouter } from 'next/navigation'
import { dateConvert } from '../../../constant'

const BlogCard = ({ eachblog }: { eachblog: Blog }) => { 
  // console.log({_eachblog: eachblog})
  const router = useRouter()
  
  const handleBlog = () => {
    router.push(`/blog/${eachblog.slug}`)
  }
// console.log("eachblog?.author?._id",eachblog);

  const handleAuthorPage =()=>{
    router.push(`/author/${eachblog?.author?._id}`)
  }
 
  return (
    <div onClick={handleBlog}  className='cursor-pointer mt-5 rounded-lg border-[1px] border-gray-400 p-4 w-["392px"] h-["488px"] gap-4 flex flex-col justify-between dark:border-slate-800  bg-white dark:bg-transparent'>
      <div className="rounded-lg object-fill h-[300px] w-full relative ">
        <Image
          src={urlForImage(eachblog?.image)?.url() || ''}
          fill
          alt='blog-image'
        />
      </div>
      <div className="h-2/6">
        <button className="rounded-lg text-blue-700 text-sm font-medium">
          {eachblog.tag}
        </button>
        <p className="font-semibold whitespace-break-spaces text-2xl ">
          {eachblog.title}
        </p>
      </div>
      <div className='flex gap-3 items-center'>
        <Image
          src={urlForImage(eachblog.author?.image)?.url() || ''}
          width={30}
          height={30}
          alt='author-image'
          className="rounded-lg object-fill"
        />
        <p className="text-base font-medium cursor-pointer" onClick={()=>{handleAuthorPage()}}>{eachblog.author?.name}</p>
        <p className="text-base font-medium ">{dateConvert(eachblog._createdAt)}</p>
      </div>
    </div>
  )
}

export default BlogCard
