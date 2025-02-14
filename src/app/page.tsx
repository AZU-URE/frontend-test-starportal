"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Creator from "../components/sections/Creators";
import Dictionary from "../components/sections/Dictionary";
import TabSwitcher from "../components/TabSwitcher";
import Footer from "../components/sections/Footer";
import AlfaHero from "../components/sections/alfa/Hero";
import Narratives from "../components/sections/alfa/Narratives";
import RecomNarrative from "@/components/sections/alfa/RecomNarrative";
import { useEffect, useState } from "react";
import Quest from "@/components/sections/Quest";

export default function Home() {
  const [tab, setTab] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);
  return (
    <div className="w-[100%] bg-black flex items-center flex-col justify-center">
      <Navbar />
      {tab === 1 ? (
        <div className=" w-[100%] flex items-center flex-col justify-center">
          <Hero />
          <Quest />
        </div>
      ) : (
        <div className=" w-[100%] flex items-center flex-col justify-center">
          <AlfaHero />
          <Narratives />
          <RecomNarrative />
        </div>
      )}
      <Creator />
      <Dictionary />

      <TabSwitcher tab={tab} setTab={setTab} />
      <Footer />
    </div>
  );
}
