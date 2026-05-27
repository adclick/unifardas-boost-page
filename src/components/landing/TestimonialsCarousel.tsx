import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Pedro Santos",
    stars: 5,
    text: "Atendimento 5 estrelas e a qualidade dos produtos nem se fala, de certo que voltarei a comprar na Unifardas.",
  },
  {
    name: "Botelho dos Santos",
    stars: 5,
    text: "Excelente atendimento! Muita oferta variedade de escolha. Muito simpático o atendimento com showroom personalizado. Super recomendo 5 estrelas.",
  },
  {
    name: "Filipe Gonçalves",
    stars: 5,
    text: "Compramos um conjunto de fardas para a empresa, ficamos muito bem impressionados com a qualidade. A empresa percebeu muito bem os nossos requisitos e foi muito versátil ao adaptar-se a todos os nossos requisitos. Excelente serviço de acompanhamento durante a venda e pós venda.",
  },
];

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="mt-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            Depoimentos
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-black">
            O que os nossos clientes dizem
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={scrollPrev}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-neutral-200 text-neutral-600 transition hover:border-brand-red hover:text-brand-red"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={scrollNext}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-neutral-200 text-neutral-600 transition hover:border-brand-red hover:text-brand-red"
            aria-label="Próximo"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
            >
              <div className="flex h-full flex-col justify-between rounded-sm border border-neutral-200 bg-white p-6 transition hover:border-brand-red/30 hover:shadow-lg hover:shadow-brand-red/5">
                <div>
                  <div className="flex gap-0.5 text-brand-red">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-neutral-700">
                    “{t.text}”
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold text-brand-black">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        <button
          onClick={scrollPrev}
          className="inline-flex size-10 items-center justify-center rounded-sm border border-neutral-200 text-neutral-600 transition hover:border-brand-red hover:text-brand-red"
          aria-label="Anterior"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={scrollNext}
          className="inline-flex size-10 items-center justify-center rounded-sm border border-neutral-200 text-neutral-600 transition hover:border-brand-red hover:text-brand-red"
          aria-label="Próximo"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              selected === i ? "w-6 bg-brand-red" : "w-2 bg-neutral-300"
            }`}
            aria-label={`Ir para depoimento ${i + 1}`}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-lg font-medium text-brand-black">
          Junte-se aos mais de 500 clientes satisfeitos
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
