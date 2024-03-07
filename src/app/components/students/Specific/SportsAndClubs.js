"use client";
import React from "react";
import { useState } from "react";
import { Tab, Disclosure } from "@headlessui/react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaFileDownload,
} from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SportsAndClubs() {
  let [categories] = useState({
    Test: [],
    Assignments: [],
    Exams: [],
  });

  const test = [
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",
      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",
      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
  ];
  const assignments = [
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",
      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",
      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
  ];
  const exams = [
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",
      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "English",
      name: "Spelling",
      date: "21/03/24",
      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "Mathematics",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "Mathematics",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
    {
      subject: "Mathematics",
      name: "Spelling",
      date: "21/03/24",

      mark: 82,
      averageMark: 80,
      classAverage: 80,
      deviation: +2,
      link: "./",
    },
  ];

  return (
    <div className="w-full   py-16 sm:px-0 bg-stone-700 my-10 rounded-md lg:px-2 border-2 border-emerald-600">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-emerald-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-emerald-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-emerald-700 shadow"
                    : "text-emerald-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <div className="w-full  pt-16">
              <div className=" w-full rounded-2xl bg-slate-900 ">
                <div className="container border-2 border-emerald-600 rounded-md ">
                  <h2 className="text-teal-50 my-2 mx-3"></h2>
                  <table className="table-auto w-full text-sm ">
                    <thead className="bg-gray-800 text-white w-full">
                      <tr className="w-full">
                        <th className="px-4 py-2">Subject</th>
                        <th className="px-4 py-2">Name </th>
                        <th className="px-4 py-2">Date </th>
                        <th className="px-4 py-2">Mark</th>
                        <th className="px-4 py-2">Average Mark</th>
                        <th className="px-4 py-2">Class Average</th>
                        <th className="px-4 py-2">Deviation</th>
                        <th className="px-4 py-2">Download</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-50">
                      {test.map((item) => (
                        <tr
                          key={item?.name}
                          className="hover:bg-emerald-600 hover:text-slate-900"
                        >
                          <td className="px-4 py-2 text-center">
                            {item?.subject}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.name}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.date}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.mark}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.averageMark}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.classAverage}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.deviation}
                          </td>
                          <td className="px-4 py-2 text-center flex item-center justify-center text-emerald-50 text-xl">
                            <FaFileDownload />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="w-full  pt-16">
              <div className=" w-full rounded-2xl bg-slate-900 ">
                <div className="container border-2 border-emerald-600 rounded-md ">
                  <h2 className="text-teal-50 my-2 mx-3"></h2>
                  <table className="table-auto w-full text-sm ">
                    <thead className="bg-gray-800 text-white w-full">
                      <tr className="w-full">
                        <th className="px-4 py-2">Subject</th>
                        <th className="px-4 py-2">Name </th>
                        <th className="px-4 py-2">Date </th>
                        <th className="px-4 py-2">Mark</th>
                        <th className="px-4 py-2">Average Mark</th>
                        <th className="px-4 py-2">Class Average</th>
                        <th className="px-4 py-2">Deviation</th>
                        <th className="px-4 py-2">Download</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-50">
                      {assignments.map((item) => (
                        <tr
                          key={item?.name}
                          className="hover:bg-emerald-600 hover:text-slate-900"
                        >
                          <td className="px-4 py-2 text-center">
                            {item?.subject}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.name}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.date}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.mark}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.averageMark}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.classAverage}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.deviation}
                          </td>
                          <td className="px-4 py-2 text-center flex item-center justify-center text-emerald-50 text-xl">
                            <FaFileDownload />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="w-full  pt-16">
              <div className=" w-full rounded-2xl bg-slate-900 ">
                <div className="container border-2 border-emerald-600 rounded-md ">
                  <h2 className="text-teal-50 my-2 mx-3"></h2>
                  <table className="table-auto w-full text-sm ">
                    <thead className="bg-gray-800 text-white w-full">
                      <tr className="w-full">
                        <th className="px-4 py-2">Subject</th>
                        <th className="px-4 py-2">Name </th>
                        <th className="px-4 py-2">Date </th>
                        <th className="px-4 py-2">Mark</th>
                        <th className="px-4 py-2">Average Mark</th>
                        <th className="px-4 py-2">Class Average</th>
                        <th className="px-4 py-2">Deviation</th>
                        <th className="px-4 py-2">Download</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-50">
                      {exams.map((item) => (
                        <tr
                          key={item?.name}
                          className="hover:bg-emerald-600 hover:text-slate-900"
                        >
                          <td className="px-4 py-2 text-center">
                            {item?.subject}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.name}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.date}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.mark}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.averageMark}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.classAverage}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {item?.deviation}
                          </td>
                          <td className="px-4 py-2 text-center flex item-center justify-center text-emerald-50 text-xl">
                            <FaFileDownload />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
