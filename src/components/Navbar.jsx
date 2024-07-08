import { Chip } from "@mui/material";
export default function Navbar() {
  return (
    <nav className="z-10 fixed w-screen bg-black/30 md:px-[8rem] px-[1rem] flex items-center justify-around space-x-10 md:py-0 py-[1rem] border-b-[1px] border-zinc-700 backdrop-blur-lg backdrop-filter">
      <img src="/logo.svg"></img>
      <div className="flex items-center justify-around flex-grow space-x-10 p-0">
        <ul className="flex items-center justify-around text-zinc-400  w-full font-medium">
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer">
            Compass
          </li>
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer">
            Explore
          </li>
          <li className=" hover:text-white py-[1.5rem] p-2 rounded-b-sm cursor-pointer">
            Academy{" "}
            <Chip
              label="New"
              className="text-white bg-purple_ text-xs rounded-lg font-semibold h-fit w-fit py-[0.25rem] ml-1"
            ></Chip>
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
      <div>
        <button className="bg-white px-[1.25rem] py-[0.5rem] text-sm rounded-md font-semibold">
          Sign In
        </button>
      </div>
    </nav>
  );
}
