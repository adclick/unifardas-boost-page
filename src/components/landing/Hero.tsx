import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top">
      <span className="mb-6 inline-flex items-center gap-2 rounded-sm bg-brand-red/10 px-3 py-1.5 text-xs font-semibold tracking-widest text-brand-red uppercase ring-1 ring-brand-red/20">
        <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
        Vestuário Profissional Premium
      </span>
      <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
        A farda que comunica a <span className="text-brand-red">excelência</span> do seu negócio.
      </h1>
      <p className="mt-8 max-w-[48ch] text-pretty text-lg leading-relaxed text-neutral-600">
        Desenhamos e produzimos uniformes técnicos que combinam durabilidade industrial com o corte de
        alfaiataria. Proteja a sua equipa com imagem e conforto.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#orcamento"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-red/30 transition-all hover:bg-brand-red/90 hover:shadow-xl hover:shadow-brand-red/40 active:scale-[0.98]"
        >
          Pedir orçamento gratuito
          <ArrowRight className="size-4" />
        </a>
        <a
          href="tel:+351000000000"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black hover:text-brand-red transition-colors"
        >
          <Phone className="size-4" />
          Falar com especialista
        </a>
      </div>
    </section>
  );
}
