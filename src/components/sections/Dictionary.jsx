export default function Dictionary() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center border-t-[1px] border-t-zinc-700/50 py-[4rem] px-[2rem] relative">
      <h1 className="md:text-3xl text-2xl tracking-wide text-slate-50 font-semibold">
        Crypto Dictionary
      </h1>
      <p className="md:text-base text-xs tracking-wide text-zinc-400 font-medium mt-3">
        Your one-stop to catch up on all crypto terms
      </p>
      <div className="md:mt-[5rem] mt-[3rem] relative rounded-xl border-[1px] border-slate-200/50">
        <img src="/glossary.svg" className="rounded-xl"></img>
        <div className="bg-slate-600/40 absolute bottom-0 flex items-center justify-between w-full px-[1rem] md:py-3 py-1">
          <div className="flex flex-col items-start justify-center ">
            <h1 className="md:text-2xl text-base font-semibold text-slate-200/80">
              Web3 + Degen Glossary
            </h1>
            <p className="md:text-base text-xs font-medium text-slate-300/70 md:mt-1 tracking-wide">
              Your own crypto dictionary
            </p>
          </div>
          <div className="w-fit flex items-center justify-center cursor-pointer h-fit bg-zinc-500/40 backdrop-blur-xl backdrop-filter rounded-full md:p-[1.25rem] p-[0.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-[1.5rem] h-[1rem]  flex items-center justify-center "
              fill="white"
              viewBox="0 0 17 17"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
