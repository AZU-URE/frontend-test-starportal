"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Creator from "../components/sections/Creators";
import Dictionary from "../components/sections/Dictionary";
export default function Home() {
  return (
    <div className="w-full bg-black flex items-center flex-col justify-center">
      <Navbar />
      <div className="overflow-x-hidden w-[100%] flex items-center flex-col justify-center">
        <Hero />
        <Creator />
        <Dictionary />
      </div>
      <div className="w-[100%] sticky bottom-[5%] z-20 my-10 flex items-center justify-center bg-red-500">
        <div className="bg-zinc-500/40 text-white w-fit flex ">Essentials</div>
      </div>
    </div>
  );
}
