import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Author Name",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
    }),
    defineField({
      name: "designation",
      type: "string",
      title: "Designation",
    }),
  ],
});
