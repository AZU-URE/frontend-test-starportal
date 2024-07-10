import CallMadeIcon from "@mui/icons-material/CallMade";
export default function RecomNarrativeCard(el) {
  return (
    <div className="relative space-x-5 rounded-2xl h-fit flex items-center justify-center bg-zinc-800/40 cursor-pointer hover:bg-zinc-800/90 border-[1px] border-zinc-700/50 p-[0.5rem] transition-colors duration-300">
      <div className="flex rounded-xl m-3 p-2 min-w-[10rem] h-[25vh] bg-zinc-800/50 backdrop-blur-sm backdrop-filter border-[1px] border-zinc-400/50 ">
        <img src={el.img} className="rounded-xl object-cover "></img>
      </div>
      <div className="flex flex-col items-start justify-center space-y-[0.75rem]">
        <h1 className="text-xl tracking-wide text-slate-50 font-medium">
          {el.title}
        </h1>
        <p className="text-start text-sm font-medium text-zinc-400 ">
          {el.desc.substring(0, 150) + "..."}
        </p>
        <hr className="text-inherit border-white/20 border-[1px] w-full border-dashed" />
        <div className="text-center rounded-3xl border-[1px] border-white/20 p-2 px-4 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 flex items-center justify-center">
          <img src="/yellowCoin.svg" className="w-[1rem]"></img>
          <span className="ml-2 text-zinc-100"> {el.xp} XPs</span>
        </div>
      </div>
      <div className=" absolute bottom-[5%] right-[4%] rounded-full bg-white/20 h-6 w-6 flex items-center justify-center">
        <CallMadeIcon className="text-zinc-500 text-base " />
      </div>
    </div>
  );
}
