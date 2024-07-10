import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RecomNarrativeCard from "../../RecomNarrativeCard";

import { recom_narrative } from "@/constants/alpha_slider";
export default function RecomNarrative() {
  return (
    <section className="w-[100%] lg:px-[11rem] px-[3rem] border-t-[1px] border-t-zinc-700/50">
      <div className="flex flex-col items-start justify-center space-y-5 mt-[3rem] mb-[6rem] w-full">
        <div className="flex md:flex-row flex-col items-center justify-between w-full mb-3">
          <h1 className="sm:text-2xl text-lg tracking-wide text-slate-50 block w-full">
            Recommended Narratives
          </h1>
          <p className="text-sm w-full text-right  font-medium text-zinc-400 cursor-pointer ">
            See all <ArrowRightIcon />
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full items-center justify-center text-center">
          {recom_narrative.map((el) => (
            <RecomNarrativeCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
