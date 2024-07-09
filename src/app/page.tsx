"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Creator from "../components/sections/Creators";
import Dictionary from "../components/sections/Dictionary";
import TabSwitcher from "../components/TabSwitcher";
import Footer from "../components/sections/Footer";
import { useState } from "react";
export default function Home() {
  const [tab, setTab] = useState(1);
  return (
    <div className="w-full bg-black flex items-center flex-col justify-center">
      <Navbar />
      <div className="overflow-x-hidden w-[100%] flex items-center flex-col justify-center">
        <Hero />
        <Creator />
        <Dictionary />
      </div>
      <TabSwitcher tab={tab} setTab={setTab} />
      <Footer />
    </div>
  );
}
