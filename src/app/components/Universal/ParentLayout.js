"use client";
// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Image from "next/image";

const SidebarContext = createContext();

const ParentLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Chat", DashoardLink: "/parent" },
    {
      title: "Reports",
      src: "User",
      gap: true,
      DashoardLink: "../parent/report ",
    },
    {
      title: "Assignments",
      src: "Calendar",
      DashoardLink: "../parent/assignments",
    },
    {
      title: "Communicate",
      src: "Search",
      DashoardLink: "../parent/communications",
    },
    {
      title: "Quiz and Games",
      src: "Setting",
      DashoardLink: "../parent/quizandgames",
    },
    { title: "Settings", src: "Setting", DashoardLink: "../parent/settings" },
  ];

  return (
    <div
      className={`flex bg-gradient-to-tr from-sky-50 via-sky-100 to-gray-300  dark:bg-gradient-to-tr dark:from-sky-950 from-10% dark:via-sky-800 via-80% dark:to-sky-950 to-90% `}
    >
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } visuals min-h-screen p-5  pt-8 relative duration-300 border-none dark:bg-transparent shadow-sky-700 shadow-2xl `}
      >
        <img
          src="../assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center ">
          <img
            src="../assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-slate-800 dark:text-slate-100 origin-left font-medium text-xl duration-200 tracking-widest font-light ${
              !open && "scale-0"
            }`}
          >
            River
            <span className=" text-rose-700">Side</span>
          </h1>
        </div>
        <div
          className={`w-full flex flex-col items-center my-10 text-slate-950 dark:text-slate-50 ${
            open ? "relative    " : "hidden"
          }`}
        >
          <div className="relative h-16 w-16 rounded-full">
            <Image src={"/Roland.jpg"} fill className="rounded-full" />
          </div>
          <div className="text-center mt-4">
            <h3 className="font-thin text-sm">Welcome Back,</h3>
            <h4 className="text-2xl font-bold tracking-widest">Mr Kandire</h4>
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link href={Menu.DashoardLink}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-600 transition-all duration-300  text-slate-800 dark:text-slate-100 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`../assets/${Menu.src}.png`} />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-inherit`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="min-h-screen w-full px-8 py-5 flex flex-col space-y-7">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default ParentLayout;
