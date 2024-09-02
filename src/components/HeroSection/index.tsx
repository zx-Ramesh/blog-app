import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-7 relative ">
      <img
        src="https://images3.alphacoders.com/132/thumb-1920-1328396.png"
        alt="image here"
        className="w-full h-4/5 object-fill rounded-lg"
      />
      <div className="h-44 w-80  rounded-lg border-[1px]  border-gray-400  bg-white dark:bg-dark dark:border-slate-700 p-4 absolute -bottom-10 left-10">
        <div className="">
          <button className="rounded-lg text-white bg-blue-700 py-1 px-2 mb-2 text-sm font-medium">
            Technology
          </button>
          <h1 className="text-base font-bold whitespace-break-spaces">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
        </div>

        <div className="w-2/5  flex pt-3 justify-between items-center  text-Primary-3">
          <img
            className="rounded-full h-6 w-6"
            src="https://images3.alphacoders.com/132/thumb-1920-1328396.png"
            alt=""
          />
          <h1 className="text-xs ">Ramesh</h1>
          <p className="text-[10px] font-bold">28/8/24</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
