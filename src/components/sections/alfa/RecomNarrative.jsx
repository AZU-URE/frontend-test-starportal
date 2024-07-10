import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RecomNarrativeCard from "../../RecomNarrativeCard";

import { recom_narrative } from "@/constants/alpha_slider";
export default function RecomNarrative() {
  return (
    <section className="w-[100%] px-[11rem] border-t-[1px] border-t-zinc-700/50">
      <div className="flex flex-col items-start justify-center space-y-5 mt-[3rem] mb-[6rem] w-full">
        <div className="flex items-center justify-between w-full mb-3">
          <h1 className="text-2xl tracking-wide text-slate-50 block">
            Recommended Narratives
          </h1>
          <p className="text-sm font-medium text-zinc-400 cursor-pointer">
            See all <ArrowRightIcon />
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full items-center justify-center text-center">
          {recom_narrative.map((el) => (
            <RecomNarrativeCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
