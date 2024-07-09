import { narrative_detail } from "@/constants/alpha_slider";
import PopularNarrativeCard from "@/components/PopularNarrativeCard";
import { useState, useEffect } from "react";
export default function Naratives() {
  const [card, setCard] = useState(1);
  const [btnTitle, setBtnTitle] = useState("Show More");
  const show = () => {
    if (card < narrative_detail.length) {
      setCard(card + 1);
    } else if (card == narrative_detail.length) {
      setCard(1);
    }
  };

  useEffect(() => {
    if (card == narrative_detail.length) {
      setBtnTitle("Show Less");
    }
  }, [card]);
  return (
    <section className="w-[100%] px-[11rem] border-t-[1px] border-t-zinc-700/50 mt-[8rem]">
      <div className="flex flex-col items-start justify-center space-y-5 mt-[3rem]">
        <h1 className="text-2xl tracking-wide text-slate-50 mb-3">
          Popular Narratives
        </h1>
        {narrative_detail.map((el) => (
          <PopularNarrativeCard el={el} show={card >= el.id} />
        ))}
        <div className="w-full items-center justify-center flex">
          <button
            onClick={show}
            className={`my-[2rem] font-semibold text-base rounded-xl p-[0.75rem] px-[2rem] bg-white/10 border-[1px] border-white/10 backdrop-filter backdrop-blur-sm text-zinc-400 `}
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </section>
  );
}
