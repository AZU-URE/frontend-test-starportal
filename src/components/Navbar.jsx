import { Chip } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawer = (
    <div className="flex flex-col items-start justify-center space-y-5 bg-black/30 border-r-[1px] border-zinc-700 backdrop-blur-lg backdrop-filter w-full h-fit">
      <ul className="flex flex-col items-center justify-around text-zinc-400  w-full font-medium">
        <li className=" hover:text-white p-[1.5rem] rounded-b-sm cursor-pointer bg-zinc-800 hover:bg-black/60 w-full text-center border-b-[1px] border-b-zinc-700">
          Compass
        </li>
        <li className="border-b-[1px] border-b-zinc-700 hover:text-white p-[1.5rem] rounded-b-sm cursor-pointer bg-zinc-800 hover:bg-black/60 w-full text-center ">
          Explore
        </li>
        <li className="border-b-[1px] border-b-zinc-700 hover:text-white p-[1.5rem] rounded-b-sm cursor-pointer relative flex items-center justify-center bg-zinc-900 hover:bg-black/60 w-full text-center">
          Academy{" "}
          <Chip
            label="New"
            className="text-white bg-purple_ text-xs rounded-lg font-semibold h-fit w-fit py-[0.25rem] ml-1"
          ></Chip>
        </li>
        <li className="border-b-[1px] border-b-zinc-700 hover:text-white p-[1.5rem] rounded-b-sm cursor-pointer bg-zinc-800 hover:bg-black/60 w-full text-center">
          NFTs
        </li>
        <li className="border-b-[1px] border-b-zinc-700 hover:text-white p-[1.5rem] rounded-b-sm cursor-pointer bg-zinc-800 hover:bg-black/60 w-full text-center">
          For Projects
        </li>
      </ul>
    </div>
  );

  const [list, setList] = useState(false);
  return (
    <nav className=" z-20 sticky top-0 w-[100%] bg-black/30 md:px-[5rem] px-[1rem]  flex items-center justify-between lg:justify-around lg:space-x-8 lg:py-0 py-[1rem] border-b-[1px] border-zinc-700 backdrop-blur-lg backdrop-filter">
      <img src="/logo.svg"></img>
      <div className="hidden lg:flex items-center justify-around flex-grow space-x-10 p-0">
        <ul className="flex items-center justify-around text-zinc-400  w-full font-medium">
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer">
            Compass
          </li>
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer">
            Explore
          </li>
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer relative flex items-center justify-center">
            Academy{" "}
            <Chip
              label="New"
              className="text-white bg-purple_ text-xs rounded-lg font-semibold h-fit w-fit py-[0.25rem] ml-1"
            ></Chip>
            <hr className="border-white rounded-full border-2 absolute bottom-0 w-full" />
          </li>
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer">
            NFTs
          </li>
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer">
            For Projects
          </li>
        </ul>

        <input
          type="search"
          placeholder="Search for ecosystems, trending quests etc.."
          className="rounded-full bg-no-repeat pl-10 py-[0.75rem] bg-[center_left_10px] bg-zinc-800 shadow-lg w-full text-sm border-[1px] border-zinc-700"
          style={{ backgroundImage: `url(/search.svg)` }}
        />
      </div>
      <div className="flex items-center justify-center space-x-3 ">
        <div className="border-2 p-2 rounded-full border-[#965214]">
          <img src="/tv.svg" className="w-[1.25rem]"></img>
        </div>
        <button className="bg-white px-[1.25rem] py-[0.5rem] text-sm rounded-md font-semibold">
          Sign In
        </button>
        <MenuIcon
          className="lg:hidden flex w-[2rem] text-zinc-400"
          // onClick={(prev) => setList(!prev)}
          onClick={toggleDrawer(true)}
          ref={anchorRef}
        />
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="top"
        anchorEl={anchorRef.current}
        className=""
      >
        {drawer}
      </Drawer>
      {/* <div
        className={`${
          list ? "flex" : "hidden"
        } absolute w-[1000px] h-[1000px] top-0 bg-red-500`}
      ></div> */}
    </nav>
  );
}
