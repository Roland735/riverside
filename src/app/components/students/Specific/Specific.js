import React from "react";

import Progress from "./Progress";
import Demographic from "./Demographic";
import Attendance from "./Attendance";
import Assignment from "./Assignment";
import AverageMark from "./AverageMark";
import SubjectAverages from "./SubjectAverages";
import HealthDetails from "./HealthDetails";
import BehaviorStatus from "./BehaviourStatus";
import GurdianDetails from "./GurdianDetails";
import TransportDetails from "./TransportDetails";
import SportsAndClubs from "./SportsAndClubs";
import StudentFinances from "./StudentFinances";
import CareerProspects from "./CareerProspects";

function Specific() {
  return (
    <div className="flex flex-col ">
      <div className="w-full flex my-5 justify-between">
        <div className="w-full">
          <div className="w-full">

            <div className="my-5 flex h-full w-full justify-between">
              <div className="w-full py-7 border-2 mr-5 rounded-md border-emerald-600 dark:bg-stone-700 bg-stone-300">
                <div className="flex justify-between items-center h-full flex-wrap">
                  <div className="h-48 w-48 my-5">
                    <AverageMark />
                    <h1 className="text-center text-stone-700 dark:text-stone-100">Average Mark</h1>
                  </div>
                  <div className=" h-48 w-48  my-5">
                    <Assignment />
                    <h1 className="text-center text-stone-700 dark:text-stone-100">Assignment</h1>
                  </div>
                  <div className=" h-48 w-48  my-5">
                    <Attendance />
                    <h1 className="text-center text-stone-700 dark:text-stone-100">
                      Attendance rate
                    </h1>
                  </div>
                </div>
              </div>
              <Demographic />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 bg-stone-700   py-10 light-border">
        <Progress />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full text-stone-50 items-center justify-between px-4 ">
          <div className="w-2/3 py-3">
            <div className="text-center mt-5 mb-2">
              <h1>Average Marks</h1>
            </div>
            <div className="h-96 border-2 border-emerald-600 rounded-md dark:bg-stone-700 ">
              <SubjectAverages />
            </div>

            <div className="w-full">
              <SportsAndClubs />
            </div>
            <div className="flex flex-wrap justify-between">
              <StudentFinances />
              <CareerProspects />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mb-4">
            <GurdianDetails />
            <BehaviorStatus />
            <HealthDetails />
            <TransportDetails />
          </div>
        </div>

        <div className="flex w-full text-stone-50 "></div>
      </div>
    </div>
  );
}

export default Specific;
