export type Blog={
   tag:string,
   image:any,
   title:string,
   slug:string,
   author?:Author,
   _createdAt:any,
   content?:any;
}
 export interface Author {
   _id:string
   name: string;
   image: any;
   bio: string;
   designation: string;
 }
 export type authorDetails = {
   _createdAt: any;
   tag: string;
   title: string;
   slug: string;
   image: any;
   author: Author;
 };
 
 export type AllAuthorDetails = {
   image: any;
   bio: string;
   designation: string;
   blogs: Blog[];
   name: string;
   _id: string;
 };
 