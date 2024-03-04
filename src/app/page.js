import Image from "next/image";
import Authentication from "./components/Universal/Authentication";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/2 ">Welcome To Riverside School</div>
      <div className="flex items-center justify-center h-screen w-full">
        <Authentication />
      </div>
    </div>
  );
}
