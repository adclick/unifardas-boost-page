import productionIcon from "@/assets/icons/production.svg";
import customIcon from "@/assets/icons/custom.svg";
import qualityIcon from "@/assets/icons/quality.svg";
import responseIcon from "@/assets/icons/response.svg";

const items = [
  {
    icon: productionIcon,
    title: "Produção nacional",
    desc: "Controlo rigoroso de qualidade em todas as fases do processo, garantindo elevados padrões de fabrico.",
  },
  {
    icon: customIcon,
    title: "Personalização à medida",
    desc: "Adaptamos cada peça à identidade da sua empresa através de bordados, estampagem, sublimação ou transfer.",
  },
  {
    icon: qualityIcon,
    title: "Qualidade e durabilidade",
    desc: "Tecidos resistentes e confortáveis, preparados para utilização intensiva no dia a dia profissional.",
  },
  {
    icon: responseIcon,
    title: "Acompanhamento próximo",
    desc: "Orçamentos ágeis e acompanhamento dedicado desde o primeiro contacto até à entrega final.",
  },
];

export function Benefits() {
  return (
    <section id="solucoes" className="bg-brand-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Vantagens
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
            Porquê escolher a Unifardas?
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-brand-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon, title, desc }, i) => {
            const featured = i === 0;
            return (
              <div
                key={title}
                className={
                  featured
                    ? "group relative flex flex-col bg-brand-black p-8 ring-2 ring-brand-red"
                    : "group relative flex flex-col bg-white p-8 transition-colors hover:bg-brand-black"
                }
              >
                {featured && (
                  <span className="mb-4 inline-flex w-fit items-center gap-2 bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Destaque
                  </span>
                )}
                <img src={icon} alt={title} className="h-14 w-14" aria-hidden />
                <h3
                  className={
                    featured
                      ? "mt-6 text-2xl font-extrabold leading-tight text-white"
                      : "mt-6 text-2xl font-extrabold leading-tight text-brand-black transition-colors group-hover:text-white"
                  }
                >
                  {title}
                </h3>
                <p
                  className={
                    featured
                      ? "mt-3 text-sm leading-relaxed text-white/80"
                      : "mt-3 text-sm leading-relaxed text-brand-gray transition-colors group-hover:text-white/80"
                  }
                >
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
