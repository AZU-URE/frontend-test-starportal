import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
