import React from "react";

function Authentication() {
  return (
    <div className="flex flex-col items-center justify-center  space-y-10 bg-white shadows px-10 py-7 rounded-lg">
      <h1 className="text-2xl">Please enter your credentials</h1>
      <form action="flex flex-col items-center justify-center w-full">
        <div className="mb-5">
          <label htmlFor="email">
            Email:
            <br />
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="johndoe@gmail.com "
            className=" my-2  border-b-2 rounded-b-md border-rose-700 placeholder:px-4"
          />
        </div>

        <div className="">
          <label htmlFor="email">
            Email:
            <br />
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="johndoe@gmail.com "
            className="border-b-2 rounded-b-md border-rose-700 placeholder:px-4"
          />
        </div>
        <div className="text-center my-5">
          <h2 className="text-sm">
            Login as{" "}
            <span className="underline cursor-pointer hover:no-underline">
              Stuff Member
            </span>
          </h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <input
            type="submit"
            className=" bg-red-700 rounded-md w-24 text-slate-50 py-3"
          />
        </div>
      </form>
    </div>
  );
}

export default Authentication;
