import Image from "next/image";
import Authentication from "./components/Universal/Authentication";

export default function Home() {
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
