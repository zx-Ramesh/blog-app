"use client";
import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
const DarkMode = () => {
  const { theme, setTheme, systemTheme,themes } = useTheme();
  console.log("ramshwa",systemTheme );
  


  const currentTheme = theme === "system" ? systemTheme : theme;


  const handleTheme = () => {
    setTheme(currentTheme == "dark" ? "light" : "dark");
  };

  return (
    <form>
      <div className="flex items-center  ">
        <Switch.Root
        value={theme}
          defaultChecked={false}
          onCheckedChange={handleTheme}
          className="w-12 h-7  bg-Primary-5 py-1 rounded-full relative   focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-Primary-6 dark: outline-none cursor-pointer"
        >
          <Switch.Thumb className=" w-[21px] h-[21px]  bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[24px] flex items-center justify-center">
            <MdLightMode />
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
};

export default DarkMode;
