import Image from "next/image";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="mt-20 flex justify-center items-center -skew-y-2 w-screen h-[100px] bg-black">
        <h1 className="  text-white">new project</h1>
      </div>

    </>

  );
}
