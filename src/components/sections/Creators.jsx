import { useState } from "react";
export default function Creator() {
  const [video, setVideo] = useState(null);
  const image_arr = [
    {
      img: "/video_1.png",
      video:
        "https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    },
    {
      img: "/video_2.png",
      video:
        "https://www.youtube.com/embed/-kmxV_JO7eY?si=__7wqWnyPPilBw7F?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    },
    {
      img: "/video_3.png",
      video:
        "https://www.youtube.com/embed/9fyVLvY3P14?si=-02HNwqzZE3jXMz4?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    },
    {
      img: "/video_4.png",
      video:
        "https://www.youtube.com/embed/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    },
  ];
  return (
    <div className="w-[100%] flex flex-col items-center justify-center border-t-[1px] border-t-zinc-700/50 py-[4rem] px-[2rem]">
      <h1 className="md:text-3xl text-2xl text-center md:tetx-left tracking-wide text-slate-50 font-semibold">
        Top Creators and Projects To follow
      </h1>
      <p className="md:text-base text-xs tracking-wide text-zinc-400 font-medium mt-3">
        Answers to your crypto doubts,straight from the experts
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 md:mt-[5rem] mt-[3rem]">
        {image_arr.map((el, id) => (
          <div className="group rounded-xl overflow-hidden border-[1px] border-slate-50/50 relative">
            <img
              src="/reel-video-icon.svg"
              className="absolute top-4 right-4 w-[2.5rem] bg-zinc-900/80 p-[0.5rem] rounded-full border-[1px] border-slate-50/50"
            ></img>
            <div className="group-hover:flex items-center justify-center hidden absolute hover:flex w-full h-full bg-zinc-900/50 ">
              <div
                onClick={() => setVideo(id)}
                className="w-fit cursor-pointer h-fit bg-zinc-800 rounded-full p-[1rem] border-[1px] border-slate-50/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="white"
                  className="scale-150 h-[2rem] rounded-full flex items-center mix-blend-overlay"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
                {id === video ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={el.video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="absolute top-0 left-0"
                  ></iframe>
                ) : null}
              </div>
            </div>
            <img src={el.img} className="rounded-xl w-full h-full"></img>
          </div>
        ))}
      </div>
    </div>
  );
}
