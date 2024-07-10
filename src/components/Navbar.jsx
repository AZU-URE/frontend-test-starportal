import { Chip } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState, useRef } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <nav className="z-10 sticky top-0 w-[100%] bg-black/30 md:px-[5rem] px-[1rem] flex items-center justify-around space-x-8 md:py-0 py-[1rem] border-b-[1px] border-zinc-700 backdrop-blur-lg backdrop-filter">
      <img src="/logo.svg"></img>
      <div className="flex items-center justify-around flex-grow space-x-10 p-0">
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
        <div
          className="border-2 p-2 rounded-full border-[#965214]"
          onClick={toggleDrawer(true)}
          ref={anchorRef}
        >
          <img src="/tv.svg" className="w-[1.25rem]"></img>
        </div>
        <button className="bg-white px-[1.25rem] py-[0.5rem] text-sm rounded-md font-semibold">
          Sign In
        </button>
      </div>
      {/* <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        anchorEl={anchorRef.current}
        className=" w-[20%] absolute top-0 left-0 h-full bg-red-500 self-end"
      >
        <div className="flex items-center justify-center bg-red-100">
          <h1></h1>
        </div>
      </Drawer> */}
    </nav>
  );
}
