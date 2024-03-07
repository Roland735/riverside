"use client";
import { useContext, createContext, useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
const SidebarContext = createContext();

const TeacherLayout = ({ children }) => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", src: "Chat", DashoardLink: "/teacher/home" },
        {
            title: "Course Management",
            src: "User",
            gap: true,
            DashoardLink: "../teacher/course",
        },
        {
            title: "Exams",
            src: "User",
            gap: true,
            DashoardLink: "../teacher/exam",
        },
        {
            title: "Analysis",
            src: "Calendar",
            DashoardLink: "../teacher/analysis",
        },
        {
            title: "Communicate",
            src: "Search",
            DashoardLink: "../parent/communications",
        },
        {
            title: "Quiz & Games",
            src: "Search",
            DashoardLink: "../parent/communications",
        },

    ];

    return (
        <div
            className={`flex bg-gradient-to-tr from-stone-50 via-stone-100 to-gray-300  dark:bg-gradient-to-tr dark:from-stone-800 from-10% dark:via-stone-800 via-80% dark:to-stone-950 to-90% `}
        >
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } visuals min-h-screen p-5  pt-8 relative duration-300 border-none dark:bg-transparent shadow-stone-700 shadow-2xl `}
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
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-stone-800 dark:text-stone-100 origin-left  text-xl duration-200 tracking-widest font-light ${!open && "scale-0"
                            }`}
                    >
                        River
                        <span className=" text-rose-700">Side</span>
                    </h1>
                </div>
                <div
                    className={`w-full flex flex-col items-center my-10 text-stone-950 dark:text-stone-50 ${open ? "relative    " : "hidden"
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
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-stone-600 transition-all duration-300  text-stone-800 dark:text-stone-100 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                    } `}
                            >
                                <img src={`../assets/${Menu.src}.png`} />
                                <span
                                    className={`${!open && "hidden"
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

export default TeacherLayout;
