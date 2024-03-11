import React from "react";

function Authentication() {
  return (
    <div className="bg-white shadows rounded-lg px-2 py-7 flex flex-col items-center justify-center space-y-10 w-10/12">
      <h1 className="text-2xl">Please enter your credentials</h1>
      <form
        action="/"
        method="post"
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="mb-5 w-10/12 flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            className="rounded-lg border border-rose-700 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="flex flex-col space-y-2 w-10/12">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="rounded-lg border border-rose-700 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
            required
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
            value="Login"
            className="bg-red-700 rounded-md text-slate-50 py-3 px-4"
          />
        </div>
      </form>
    </div>
  );
}

export default Authentication;
