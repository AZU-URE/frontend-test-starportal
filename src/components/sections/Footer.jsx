import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-[100%] flex flex-col items-center justify-around border-t-[1px] border-t-zinc-700/50 py-[4rem] px-[8rem]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start mt-[1rem] justify-center">
          <img src="/logo.svg"></img>
          <p className="text-sm font-medium text-zinc-600 mt-[1rem] w-[80%]">
            We are your personal guide for exploring web3 projects & earning
            100x rewards.
          </p>
        </div>
        <div className="flex items-start justify-around space-x-[4rem]">
          <div className="flex flex-col items-start justify-center space-y-[0.5rem]">
            <p className="footer-link-heading ">Intract</p>
            <p className="footer-links">Explore Quests</p>
            <p className="footer-links">Communities</p>
            <p className="footer-links">Apha hub</p>
          </div>
          <div className="flex flex-col items-start justify-center space-y-[0.5rem]">
            <p className="footer-link-heading ">Earn</p>
            <p className="footer-links">Refer & Earn</p>
            <p className="footer-links">Leaderboard</p>
            <p className="footer-links">Achievements</p>
          </div>
          <div className="flex flex-col items-start justify-center space-y-[0.5rem]">
            <p className="footer-link-heading ">About</p>
            <p className="footer-links">Product Roadmap</p>
            <p className="footer-links">Affiliate Programming</p>
            <p className="footer-links">Sign up Program</p>
            <p className="footer-links">Growth Community</p>
            <p className="footer-links">Blogs</p>
          </div>
          <div className="flex flex-col items-start justify-center space-y-[0.5rem]">
            <p className="footer-link-heading ">Support</p>
            <p className="footer-links">Help Center</p>
            <p className="footer-links">Create Your quest</p>
            <p className="footer-links">Terms of service</p>
            <p className="footer-links">Priacy Policy</p>
            <p className="footer-links">Community Guidelines</p>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-t-zinc-700/50 py-[4rem] mt-[4rem] flex items-center justify-center ">
        <p className="footer-links ">
          <span className="text-zinc-200">Disclaimer:</span> Crypto Products,
          Virtual Digital Assets, and NFTs are unregulated and can be highly
          risky. There may be no regulatory recourse for any loss from such
          transactions. We advise the viewer to proceed with caution. Nothing in
          this website or any communication published by us amounts to, is
          intended to be, or should be construed as investment or purchase
          advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </p>
      </div>
      <div className="border-t-[1px] border-t-zinc-700/50 py-[4rem] mt-[4rem] flex items-center justify-between w-full">
        <p className="uppercase text-white">
          Created by{" "}
          <Link
            href={"https://github.com/AZU-URE"}
            className="underline hover:text-zinc-400"
          >
            Garima Mangal
          </Link>
        </p>
        <div className="flex items-center justify-between space-x-4 ">
          <Link
            href={"https://twitter.com/AZU_URE"}
            className="p-[0.5rem] bg-zinc-800 rounded-xl"
          >
            <img src="/twitter.png" className="w-[1.25rem]"></img>
          </Link>
          <Link
            gref={"https://discord.com/users/AZU_URE"}
            className="p-[0.5rem] bg-zinc-800 rounded-xl"
          >
            <img src="/discord.png" className="w-[1.25rem]"></img>
          </Link>
          <Link
            href={"https://t.me/azu_ure"}
            className="p-[0.5rem] bg-zinc-800 rounded-xl"
          >
            <img src="/telegram.png" className="w-[1.25rem]"></img>
          </Link>
          <Link
            href={"https://open.spotify.com/user/ej57yeextzbrqtg60uytnxfie"}
            className="p-[0.5rem] bg-zinc-800 rounded-xl"
          >
            <img src="/spotify.png" className="w-[1.25rem]"></img>
          </Link>
        </div>
      </div>
    </section>
  );
}
