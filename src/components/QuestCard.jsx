import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import { useState } from "react";
export default function QuestCard({ el }) {
  const [trigger, setTrigger] = useState(-1);
  return (
    <div
      onMouseOver={() => setTrigger(el.id)}
      onMouseOut={() => setTrigger(-1)}
      className="group flex flex-col items-start justify-center space-y-[0.75rem] bg-zinc-800/40 cursor-pointer hover:bg-zinc-800/90 p-[0.5rem] transition-colors duration-300 rounded-xl mx-3 overflow-hidden"
    >
      <img src={el.img} className="rounded-xl"></img>
      <div className="flex items-center justify-start space-x-2">
        <img
          src={el.chainLogo}
          alt={el.chain.substring(0, 3)}
          className="w-[1.5rem]"
        ></img>
        <p className="text-sm font-medium w-full text-zinc-400 ">{el.chain}</p>
      </div>
      <p className="text-base tracking-wide text-slate-50 font-medium">
        {el.title}
      </p>
      <hr className="text-inherit border-white/20 border-[1px] w-full rounded-3xl" />
      <div className="relative flex overflow-x-hidden w-full">
        <div
          className={`px-3 flex items-center justify-start space-x-2  pt-2 ${
            el.id == trigger
              ? "group-hover:animate-marquee whitespace-nowrap"
              : ""
          }`}
        >
          <div className="text-center rounded-3xl border-[1px] border-zinc-600/50 p-[3px] px-2 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 flex items-center justify-center">
            <SplitscreenIcon className="w-[1rem] text-red-600" />
            <span className="ml-1 text-zinc-100"> {el.task} Tasks</span>
          </div>
          <div className="text-center rounded-3xl border-[1px] border-zinc-600/50 p-[0.32rem] px-2 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 flex items-center justify-center">
            <img src="/yellowCoin.svg" className="w-[1rem]"></img>
            <span className="ml-1 text-zinc-100"> {el.xp} XPs</span>
          </div>
        </div>
        <div
          className={`absolute top-0 flex items-center justify-start space-x-2 pt-2  px-3 ${
            el.id == trigger
              ? "group-hover:animate-marquee2 whitespace-nowrap"
              : ""
          }`}
        >
          <div className="text-center rounded-3xl border-[1px] border-zinc-600/50 p-[3px] px-2 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 flex items-center justify-center">
            <SplitscreenIcon className="w-[1rem] text-red-600" />
            <span className="ml-1 text-zinc-100"> {el.task} Tasks</span>
          </div>
          <div className="text-center rounded-3xl border-[1px] border-zinc-600/50 p-[0.32rem] px-2 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 flex items-center justify-center">
            <img src="/yellowCoin.svg" className="w-[1rem]"></img>
            <span className="ml-1 text-zinc-100"> {el.xp} XPs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
