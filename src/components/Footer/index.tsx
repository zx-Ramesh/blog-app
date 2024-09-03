import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 bg-Primary-2 dark:bg-dark-5 ">
      <div className=" w-4/5  pt-12 m-auto  flex justify-between pb-14 border-b-2 border-gray-300 px-1 ">
        <div className="w-3/12">
          <h1 className="font-semibold text-lg pb-3">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sint
            natus ducimus cum, temporibus maiores dignissimos sunt quasi illum
            numquam optio odit. Architecto, quia et.
          </p>
          <div className="mt-5">
            <div className="flex">
              <h1 className="font-bold pr-1.5">Email:</h1>
              <p>info@jstemplate.net</p>
            </div>
            <div className="flex">
              <h1 className="font-bold pr-1.5">Phone:</h1>
              <p>8888888888</p>
            </div>
          </div>
        </div>
        <div className="w-2/12">
          <h1 className="font-semibold text-lg pb-3">Quick Link</h1>
          <ul className="">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2"> Achived</li>
            <li className="mb-2">Author</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h1 className="font-semibold text-lg pb-3">Category</h1>
          <ul className="">
            <li className="mb-2">Lifestyle</li>
            <li className="mb-2">Technology</li>
            <li className="mb-2">Business</li>
            <li className="mb-2"> Travel</li>
            <li className="mb-2">Economy</li>
            <li className="mb-2">Sports</li>
          </ul>
        </div>
        <div className="w-3/12 bg-white dark:bg-dark-4 p-5 rounded-lg flex flex-col items-center">
          <h1 className="font-semibold text-lg pb-1">White Newsletter</h1>
          <p className="whitespace-nowrap text-sm text-gray-400">
            Get blog articles and offers via mail
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
