import { client } from "@/sanity/lib/client";
import React from "react";
import BlogCard from "../BlogCard";
import { Blog } from "../../../typings";

const 
LatestPost = async() => {
  const query = `*[_type=='blog'] |order(_createdAt desc) {
  tag,
  title,
  image,
  author,
  "slug":slug.current,
  author->{name,image},
  content,
}`

const blogs:Blog[] = await client.fetch(query);
console.log("nikhilwa",blogs)
  return (
    <div className="flex min-h-screen flex-col mt-16">
      <h1 className="font-bold text-xl">Latest Blog</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          blogs.map((eachblog:Blog) =>(
            <BlogCard eachblog={eachblog} key={eachblog.slug}/>
          ))
        }

      </section>
      
    </div>
  );
};

export default LatestPost;
