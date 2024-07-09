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
      <div className="absolute w-[100%] top-[30%] flex flex-col items-center justify-center  px-[8rem]">
        <img
          src="/home_img.gif"
          className="mix-blend-screen w-[15vw] h-auto "
        ></img>
        <div className="mt-[9rem] flex flex-col items-start justify-center w-full ">
          <h1 className="text-2xl tracking-wide text-slate-50 mb-10 px-12 ">
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
