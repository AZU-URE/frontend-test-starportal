import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import QuestCard from "./QuestCard";
import Slider from "react-slick";
export default function PopularNarrativeCard({ el }) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
  };
  return (
    <div className="group flex items-center bg-white/5 border-[1px] border-white/20 backdrop-filter backdrop-blur-sm rounded-3xl justify-center  object-contain overflow-hidden">
      <div className="flex flex-col items-start space-y-[1rem] w-[35%] justify-between bg-zinc-800/40 cursor-pointer hover:bg-zinc-800/90 border-r-[1px] border-r-zinc-700/50 p-[1.5rem] transition-colors duration-300">
        <h1 className="text-2xl tracking-wide text-slate-50 font-medium">
          {el.title}
        </h1>
        <p className=" text-base font-medium w-full text-zinc-400 ">
          {el.desc.substring(0, 150) + "..."}
        </p>
        <div className="flex items-center justify-start space-x-3 border-b-white/20 w-full">
          <div className="text-center rounded-3xl border-[1px] border-white/20 p-2 px-4 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 ">
            {el.quest} Quests
          </div>
          <AvatarGroup className="">
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
              +{el.count}
            </div>
          </AvatarGroup>
        </div>
        <hr className="text-inherit border-white/20 border-[1px] w-full border-dashed" />
        <div className="text-center rounded-3xl border-[1px] border-white/20 p-2 px-4 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 flex items-center justify-center">
          <img src="/yellowCoin.svg" className="w-[1rem]"></img>
          <span className="ml-2 text-zinc-100"> {el.xp} XPs</span>
        </div>
        <div className="flex items-center w-full justify-center">
          <button className="mt-[2rem] font-semibold flex items-center justify-center space-x-2 w-full bg-purple_ text-white text-sm  rounded-lg p-[0.75rem]">
            <p>Start Here</p>
            <img src="/rightArrow.svg"></img>
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 w-[65%] h-full px-10 overflow-hidden">
        <Slider {...sliderSettings}>
          {el.questList.map((elm) => (
            <QuestCard el={elm} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
