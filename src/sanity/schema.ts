import { type SchemaTypeDefinition } from "sanity";
import blog from "./blog";
import author from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author],
};
