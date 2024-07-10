import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import QuestCard from "./QuestCard";
import Slider from "react-slick";
export default function PopularNarrativeCard({ el, show }) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`group flex lg:flex-row flex-col items-center bg-white/5 border-[1px] border-white/20 backdrop-filter backdrop-blur-sm rounded-3xl justify-center  object-contain overflow-hidden ${
        show ? "" : "hidden"
      } `}
    >
      <div className="flex flex-col items-start space-y-[1rem] lg:w-[35%] justify-between bg-zinc-800/40 cursor-pointer hover:bg-zinc-800/90 border-r-[1px] border-r-zinc-700/50 p-[1.5rem] transition-colors duration-300">
        <h1 className="sm:text-2xl text-xl tracking-wide text-slate-50 font-medium">
          {el.title}
        </h1>
        <p className=" sm:text-base text-sm font-medium w-full text-zinc-400 ">
          {el.desc.substring(0, 150) + "..."}
        </p>
        <div className="flex items-center justify-start space-x-3 border-b-white/20 w-full">
          <div className="text-center rounded-3xl border-[1px] border-white/20 sm:p-2 p-1 px-2 sm:px-4 bg-zinc-800/70 backdrop-blur-sm backdrop-filter sm:text-sm text-xs font-medium text-zinc-400 ">
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
            <div className=" font-medium sm:text-sm text-xs bg-zinc-600/50 text-zinc-100 rounded-full border-[1.5px] flex items-center justify-center p-2 border-white">
              +{el.count}
            </div>
          </AvatarGroup>
        </div>
        <hr className="text-inherit border-white/20 border-[1px] w-full border-dashed" />
        <div className="text-center rounded-3xl border-[1px] border-white/20 p-2 px-4 bg-zinc-800/70 backdrop-blur-sm backdrop-filter text-sm font-medium text-zinc-400 flex items-center justify-center">
          <img src="/yellowCoin.svg" className="w-[1rem]"></img>
          <span className="ml-2 text-zinc-100 sm:text-sm text-xs">
            {" "}
            {el.xp} XPs
          </span>
        </div>
        <div className="flex items-center w-full lg:justify-center justify-start">
          <button className="mt-[2rem] font-semibold flex items-center justify-center space-x-2 lg:w-full w-[15rem] bg-purple_ text-white text-sm  rounded-lg p-[0.75rem]">
            <p>Start Here</p>
            <img src="/rightArrow.svg"></img>
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:w-[65%] h-full px-10 overflow-hidden lg:my-0 my-[2rem]">
        <Slider {...sliderSettings}>
          {el.questList.map((elm) => (
            <QuestCard el={elm} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
