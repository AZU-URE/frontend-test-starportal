export default function Hero() {
  return (
    <section className="w-[100%] realtive">
      <img src="/hero_bg.png" className="w-[100%]"></img>
      <div className="absolute lg:top-[30%] top-[20%] flex flex-col items-center justify-center w-full ">
        <img
          src="/home_img.gif"
          className="mix-blend-screen w-[20vw] h-auto "
        ></img>
        <div className="flex flex-col items-center justify-center w-full md:space-y-[1.5rem] space-y-[1rem] md:mt-[1.5rem] mt-2">
          <p className="lg:text-xl text-xs md:text-base text-zinc-600 font-semibold text-center">
            <span className="text-zinc-300">Intract users</span> have together
            made more than <span className="text-zinc-300"> $100 million</span>{" "}
            in web3.
            <br />
            Join them and{" "}
            <span className="text-zinc-300">learn how to earn crypto!</span>
          </p>
          <button className="w-[10rem] bg-purple_/75 text-white rounded-lg">
            <div className="flex items-center justify-center space-x-2 hover:translate-x-2 transition delay-200 duration-150 p-[0.3rem] md:p-[0.6rem]">
              <span className="md:text-base text-xs">Get Started</span>
              <img src="/rightArrow.svg" className="md:text-base text-xs"></img>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
