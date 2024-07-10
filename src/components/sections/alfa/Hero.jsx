import AlfaSliderSlide from "../../../components/AlfaSliderSlide";
import { slider_details } from "@/constants/alpha_slider";
import Slider from "react-slick";
export default function AlfaHero() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
  };
  return (
    <section className="w-[100%]">
      <img src="/hero_bg.png" className="w-[100%]"></img>
      <div className="absolute w-[100%] md:top-[30%] top-[20%] flex flex-col items-center justify-center  lg:px-[8rem] px-[1rem]">
        <div className="relative">
          <img
            src="/home_img.gif"
            className="mix-blend-screen lg:w-[15vw] w-[25vw] h-auto"
          ></img>
          <img
            src="/alpha/alpha_home_img.svg"
            className="absolute md:-bottom-[3.5rem] md:-right-[3.5rem] -bottom-[2rem] -right-[2rem] w-[15vw] md:w-fit"
          ></img>
        </div>
        <div className="lg:mt-[9rem] mt-[2rem] md:mt-[3rem] flex flex-col items-start justify-center w-full ">
          <h1 className="sm:text-2xl text-lg tracking-wide text-slate-50 lg:mb-10 mb-7 px-12 ">
            Daily New Alpha For You
          </h1>
          <div className="w-[100%] h-fit overflow-hidden px-12 ">
            <Slider {...sliderSettings}>
              {slider_details.map((el) => (
                <AlfaSliderSlide
                  title={el.title}
                  desc={el.desc.substring(0, 200) + "..."}
                  count={el.count}
                  img={el.img}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
