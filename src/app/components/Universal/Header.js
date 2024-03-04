import Image from "next/image";
import { FaBell, FaMoon } from "react-icons/fa";
import React from "react";
import ThemeToogle from "./ThemeToogle";

function Header() {
  return (
    <div className="flex justify-between px-5 py-3   items-center  dark:bg-sky-950 shadows">
      <div className="text-sky-800 dark:text-sky-200">
        <span>Roland Mungure</span>, <span>Junior School</span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-2xl text-sky-900 space-x-2 flex">
          <ThemeToogle />
          <div className="text-sky-800 dark:text-sky-50">
            <FaBell />
          </div>
        </div>
        <div className="relative h-14 w-14 rounded-full border-emerald-600 border-2">
          <Image src="/Roland.jpg" fill className=" rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Header;
