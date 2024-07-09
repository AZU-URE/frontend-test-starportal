import { narrative_detail } from "@/constants/alpha_slider";
import PopularNarrativeCard from "@/components/PopularNarrativeCard";
export default function Naratives() {
  return (
    <section className="w-[100%] px-[11rem] border-t-[1px] border-t-zinc-700/50 mt-[8rem]">
      <div className="flex flex-col items-start justify-center space-y-5 mt-[3rem]">
        <h1 className="text-2xl tracking-wide text-slate-50 mb-3">
          Popular Narratives
        </h1>
        <PopularNarrativeCard el={narrative_detail[0]} />
      </div>
    </section>
  );
}
