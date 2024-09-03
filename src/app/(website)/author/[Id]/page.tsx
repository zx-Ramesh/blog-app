import AuthorPage, { authorData } from "@/components/AuthorPage";
import { client } from "@/sanity/lib/client";
import React, { Suspense } from "react";
import { AllAuthorDetails } from "../../../../../typings";


export default async function Page({ params }: { params: { id: string } }) {
  // console.log(params.id);

  const query = (id: string): string => {
    return `*[_type == "author" && _id == "${id}"] {
      image,
      name,
      _id,
      bio,
      designation, 
      "blogs": *[_type == "blog" && references(^._id)] {
        _createdAt,
        tag,
        title,
        "slug": slug.current,
        image,
        "author": *[_type == "author" && _id == "${id}" ] {
          image,
          name,
          bio,
          _id,
          designation
        }[0]
      }
    }[0]`;
  };
  const authorDetail:AllAuthorDetails = await client.fetch(query(params.id));

  // console.log("authorDetails111111111",authorDetail);

  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <AuthorPage authorDetails={authorDetail}/>
      </Suspense>
    </>
  );
}
