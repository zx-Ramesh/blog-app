import BlogPage from "@/components/BlogPage";
import { client } from "@/sanity/lib/client"

export default async function Page({ params:{slug} }: { params: { slug: string } }) {
    // console.log("slug",slug)
    const query = `*[_type=="blog" && slug.current =="${slug}"]{
        tag,
        title,
        author->{name,image,bio},
        content,
        _createdAt,
        image,
    }[0]`
    const blogDetails = await client.fetch(query)
    return (
        <BlogPage blogdetails={blogDetails}/>
    );
  }