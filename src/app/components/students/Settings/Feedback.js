"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaUserCircle,
} from "react-icons/fa";

function Feedback() {
  return (
    <div className="w-full px-4 my-2">
      <div className=" w-full rounded-2xl dark:bg-white bg-stone-500  p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-stone-700 px-4 py-2 text-left text-sm font-medium text-stone-50 hover:bg-stone-800 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/75">
                <div className="text-2xl">
                  <FaUserCircle />
                </div>
                <div className="text-2xl tracking-widest font-bold">
                  <span>FeedBack</span>
                </div>
                <FaArrowAltCircleDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-emerald-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <form action="" className="flex flex-col space-y-3">
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="" className="">
                      Teacher:
                    </label>
                    <input
                      type="text"
                      placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nam, sint et illum minima ipsa mollitia sit inventore dicta doloribus ullam harum amet recusandae quasi, nulla vel rerum est distinctio provident libero corporis ipsum numquam quisquam quia! Adipisci, illum modi"
                      className="light-border px-3 py-4 tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="" className="">
                      Management:
                    </label>
                    <input
                      type="text"
                      placeholder="Mungure"
                      className="light-border px-3 py-4 tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="" className="">
                      Student Progress:
                    </label>
                    <input
                      type="text"
                      placeholder="2013423442D"
                      className="light-border px-3 py-4 tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="" className="">
                      Student Progress:
                    </label>
                    <input
                      type="text"
                      placeholder="2013423442D"
                      className="light-border px-3 py-4 tracking-widest"
                    />
                  </div>

                  <div className="flex flex-col space-y-3"></div>
                </form>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Feedback;
