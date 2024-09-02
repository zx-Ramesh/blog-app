"use client"
import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { Blog } from '../../../typings'
import { useRouter } from 'next/navigation'

const BlogCard = ({ eachblog }: { eachblog: Blog }) => {
  
  console.log({_eachblog: eachblog})
  console.log("hello ")
  const router = useRouter()
  
  const handleBlog = () => {
    router.push(`/blog/${eachblog.slug}`)
  }

  const handleAuthorPage =()=>{
    router.push(`/author/${eachblog.slug}`)
  }
 
  return (
    <div className='mt-5 rounded-lg border-[1px] border-gray-400 p-4 w-["392px"] h-["488px"] gap-4 flex flex-col justify-between dark:border-slate-800  bg-white dark:bg-transparent'>
      <div className="rounded-lg object-fill h-[300px] w-full border border-red-600 relative ">
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
        <p onClick={handleBlog} className="font-semibold whitespace-break-spaces text-2xl cursor-pointer">
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
        <p className="text-base font-medium cursor-pointer " onClick={handleAuthorPage}>{eachblog.author?.name}</p>
        <p className="text-base font-medium ">30/8/24</p>
      </div>
    </div>
  )
}

export default BlogCard
