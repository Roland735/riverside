"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaUserCircle,
} from "react-icons/fa";
function Contact() {
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
                  <span>Contact</span>
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
                      Email:
                    </label>
                    <input
                      type="text"
                      placeholder="rolandmungure@gmail.com"
                      className="light-border px-3 py-4 tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="" className="">
                      Contact 1:
                    </label>
                    <input
                      type="tel"
                      placeholder="+263777364602"
                      className="light-border px-3 py-4 tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="" className="">
                      Contact 2:
                    </label>
                    <input
                      type="tel"
                      placeholder="+263776686885"
                      className="light-border px-3 py-4 tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="" className="">
                      Physical Adress:
                    </label>
                    <input
                      type="text"
                      placeholder="96 Newstead Marlborough Harare"
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

export default Contact;
