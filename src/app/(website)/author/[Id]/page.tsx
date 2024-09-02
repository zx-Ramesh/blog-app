import AuthorPage from "@/components/AuthorPage";
import { client } from "@/sanity/lib/client";
import React, { Suspense } from "react";
// import { client } from "../../../../../sanity/lib/client";
// import AuthorPage from "@/components/Author Page";
// import { fetchAuthorDetails } from "@/components/Utils/queries";

export default async function Page({ params }: { params: { id: string } }) {
  // console.log(params.id);

  const query = (id: string): string => {
    return `*[_type == "author" && _id == "${id}"] {
      image,
      name,
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
          designation
        }[0]
      }
    }[0]`;
  };
  const authorDetail = await client.fetch(query(params.id));

  console.log("authorDetails",authorDetail);

  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <AuthorPage />
      </Suspense>
    </>
  );
}
