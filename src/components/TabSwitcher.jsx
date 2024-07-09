export default function TabSwitcher({ tab, setTab }) {
  return (
    <div className="w-[100%] sticky bottom-[5%] z-20 my-10 flex items-center justify-center">
      <div className="bg-zinc-800/80 flex w-[20%] rounded-3xl justify-around items-center text-zinc-400 border-[1px] border-slate-200/50 backdrop-blur-sm backdrop-filter">
        <p
          className={`${
            tab === 1 ? " bg-zinc-300/50 text-white" : ""
          } rounded-3xl py-2 text-base font-medium w-full text-center hover:bg-zinc-400/30 hover:text-white tra`}
          onClick={() => setTab(1)}
        >
          Essentials
        </p>
        <p
          onClick={() => setTab(2)}
          className={`${
            tab === 2 ? " bg-zinc-300/50 text-white" : ""
          } rounded-3xl py-2 text-base font-medium w-full text-center hover:bg-zinc-400/30 hover:text-white`}
        >
          Alpha Hub
        </p>
      </div>
    </div>
  );
}
