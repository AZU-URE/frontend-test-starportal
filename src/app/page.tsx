"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Creator from "../components/sections/Creators";
export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Creator />
    </div>
  );
}
