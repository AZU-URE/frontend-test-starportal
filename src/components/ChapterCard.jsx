export default function ChapterCard(el) {
  return (
    <div className="relative space-x-5 rounded-2xl h-fit flex lg:flex-row flex-col items-center justify-center bg-zinc-800/40 cursor-pointer hover:bg-zinc-800/90 border-[1px] border-zinc-700/50 p-[0.5rem] transition-colors duration-300 lg:w-[40vw] md:w-[20rem] w-[15rem]">
      <div className="flex rounded-xl m-3 p-2 min-w-[10rem] h-[25vh] bg-zinc-800/50 backdrop-blur-sm backdrop-filter border-[1px] border-zinc-400/50 relative">
        <img src={el.img} className="rounded-xl object-cover "></img>
        <div className="absolute backdrop-filter backdrop-blur-sm bg-black/20 rounded-full border-[1px] border-zinc-400 p-[0.5rem] px-[1rem] text-white font-semibold bottom-[1rem] left-[25%] md:text-base text-xs">
          {el.quest} Quests
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-[0.75rem]">
        <h1 className="sm:text-xl text-lg tracking-wide text-slate-50 font-medium">
          {el.title}
        </h1>
        <p className="text-start sm:text-sm text-xs font-medium text-zinc-400 ">
          {el.desc.substring(0, 150) + "..."}
        </p>
        <hr className="text-inherit border-white/20 border-[1px] w-full border-dashed" />
        <div className="text-center rounded-3xl border-[1px] border-white/20 p-2 px-4 bg-zinc-800/70 backdrop-blur-sm backdrop-filter sm:text-sm text-xs font-medium text-zinc-400 flex items-center justify-center">
          <img src="/yellowCoin.svg" className="w-[1rem]"></img>
          <span className="ml-2 text-zinc-100"> {el.xp} XPs</span>
        </div>
      </div>
    </div>
  );
}
