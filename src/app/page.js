"use client";
import Image from "next/image";
import Authentication from "./components/Universal/Authentication";
import connectDB from "../../lib/db";
import { useEffect } from "react";

import Link from "next/link";

// Ensure that connectDB is called synchronously
connectDB();

export default function Home() {
  // You can still use useEffect hook here to handle side effects
  useEffect(() => {
    // Side effects can be handled here
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-1/2 relative">
        <Image src={"/Home.jpg"} fill className=" rounded-tr-3xl" />
      </div>
      <div className="flex items-center justify-center h-screen w-1/2">
        <Authentication />
      </div>
    </div>
  );
}
