import LockIcon from "@mui/icons-material/Lock";
import DoneIcon from "@mui/icons-material/Done";
export default function RewardCard(el) {
  return (
    <div className="flex flex-col md:items-start items-center justify-center space-y-[0.5rem] md:pt-0 pt-[4rem]">
      <div className="rounded-xl p-[0.5rem] border-2 border-white/30 relative">
        <DoneIcon className="absolute -top-[5rem] left-[30%]  border-2 border-zinc-700 text-zinc-700 text-[3rem] bg-zinc-600/20 rounded-full p-2 flex items-center" />
        <img src={el.img} className="rounded-xl w-[10rem]"></img>
        <LockIcon className="absolute -bottom-5 -right-5  border-2 border-white/30 text-zinc-400 text-[3rem] bg-black/90 rounded-full p-2 flex items-center" />
      </div>
      <h1 className="sm:text-lg text-base tracking-wide text-slate-50 font-medium pt-[1rem]">
        {el.title}
      </h1>
      <p className="md:text-start text-center sm:text-sm text-xs font-semibold text-zinc-700 w-[70%]">
        {el.desc}
      </p>
      <button
        className="border-[1px] w-[50%] border-zinc-700 text-zinc-700 text-base bg-zinc-800/60 rounded-xl p-2 text-center font-semibold"
        disabled
      >
        Claim
      </button>
    </div>
  );
}
