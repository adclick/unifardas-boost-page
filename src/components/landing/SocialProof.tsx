import { ArrowRight } from "lucide-react";

export function SocialProof() {
  return (
    <section className="mt-24">
      <div className="border-t border-neutral-200 pt-12">
        <p className="text-xs font-medium uppercase tracking-widest text-brand-red">
          Confiança de líderes de setor
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6 opacity-80">
          {["HOTELS GROUP", "MEDCARE", "INDUSTRIA+", "VIVA CORP", "GASTRO PT"].map((n) => (
            <span
              key={n}
              className="text-sm font-semibold tracking-widest text-neutral-500"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-6 rounded-sm bg-brand-red p-8 text-white sm:grid-cols-3">
        <div>
          <div className="text-4xl font-bold">+15</div>
          <p className="mt-1 text-sm text-white/80">Anos de experiência</p>
        </div>
        <div>
          <div className="text-4xl font-bold">500+</div>
          <p className="mt-1 text-sm text-white/80">Empresas parceiras</p>
        </div>
        <div>
          <div className="text-4xl font-bold">24h</div>
          <p className="mt-1 text-sm text-white/80">Resposta a orçamentos</p>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-lg font-medium text-brand-black">
          Pronto para vestir a sua equipa com excelência?
        </p>
        <a
          href="#orcamento"
          className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-red/30 transition-all hover:bg-brand-red/90 hover:shadow-xl hover:shadow-brand-red/40 active:scale-[0.98]"
        >
          Pedir orçamento agora
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
