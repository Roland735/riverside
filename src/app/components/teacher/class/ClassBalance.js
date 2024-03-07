import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";

function ClassBalance() {
  return (
    <div className=" border-2 border-emerald-600 rounded-md px-3 py-2 colors">
      <div className=" flex justify-between items-center">
        <div className="text-red-600 text-2xl">-$5000</div>
        <div className="text-3xl text-emerald-600">
          <FaMoneyBillWave />
        </div>
      </div>
      <div className="mb-5">Class Fees Balance</div>
      <div className="">
        Total Fully Paid Students: <span className="text-emerald-600">20</span>
        <span>/24</span>
      </div>
    </div>
  );
}

export default ClassBalance;
