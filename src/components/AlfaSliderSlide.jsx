import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function AlfaSliderSlide({ title, desc, count, img }) {
  return (
    <div className="flex lg:flex-row flex-col items-center bg-white/5 border-[1px] border-white/20 backdrop-filter backdrop-blur-sm p-4  rounded-3xl justify-center sm:space-x-6 object-contain overflow-hidden">
      <img src={img} className="rounded-xl lg:w-[50%] md:w-[100%]"></img>
      <div className="flex flex-col justify-center items-start mt-2 sm:p-3 p-1">
        <h1 className="sm:text-2xl text-xl tracking-wide text-slate-50 font-medium mb-2">
          {title}
        </h1>
        <p className=" pb-5 border-b-[1px] border-b-zinc-700 sm:text-base text-sm font-medium w-full text-zinc-400 ">
          {desc}
        </p>
        <AvatarGroup className="mt-3">
          <Avatar
            alt="AV"
            src="/alpha/avatar1.jpg"
            className=" bg-zinc-800 blend-soft-light text-zinc-400 "
          />
          <Avatar
            alt="AV"
            src="/alpha/avatar2.jpg"
            className=" bg-zinc-800 blend-soft-light text-zinc-400 "
          />
          <Avatar
            alt="AV"
            src="/alpha/avatar3.jpg"
            className=" bg-zinc-800 blend-soft-light text-zinc-400 "
          />
          <div className=" font-medium text-sm bg-zinc-600/50 text-zinc-100 rounded-full border-[1.5px] flex items-center justify-center p-2 border-white">
            +{count}
          </div>
        </AvatarGroup>
        <button className="mt-[2.25rem] font-semibold flex items-center justify-center space-x-2 w-[10rem] bg-purple_ text-white text-sm  rounded-lg p-[0.75rem] ring-2 ring-violet-400/60">
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}
