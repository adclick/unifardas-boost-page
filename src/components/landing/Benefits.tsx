import productionIcon from "@/assets/icons/production.svg";
import customIcon from "@/assets/icons/custom.svg";
import qualityIcon from "@/assets/icons/quality.svg";
import responseIcon from "@/assets/icons/response.svg";

const items = [
  {
    icon: productionIcon,
    title: <>Produção<br />nacional</>,
    desc: "Controlo rigoroso de qualidade em todas as fases do processo, garantindo elevados padrões de fabrico.",
  },
  {
    icon: customIcon,
    title: <>Personalização<br />à medida</>,
    desc: "Adaptamos cada peça à identidade da sua empresa através de bordados, estampagem, sublimação ou transfer.",
  },
  {
    icon: qualityIcon,
    title: <>Qualidade e<br />durabilidade</>,
    desc: "Tecidos resistentes e confortáveis, preparados para utilização intensiva no dia a dia profissional.",
  },
  {
    icon: responseIcon,
    title: <>Acompanhamento<br />próximo</>,
    desc: "Orçamentos ágeis e acompanhamento dedicado desde o primeiro contacto até à entrega final.",
  },
];

export function Benefits() {
  return (
    <section id="solucoes" className="bg-brand-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-brand-red/10 px-3 py-1.5 text-xs font-semibold text-brand-red uppercase ring-1 ring-brand-red/20">
            <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
            Vantagens
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
            Porquê escolher a Unifardas?
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-brand-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col bg-white p-8 transition-colors hover:bg-brand-black"
            >
              <img src={icon} alt={title} className="h-14 w-14" aria-hidden />
              <h3 className="mt-6 text-2xl font-normal leading-none tracking-tight text-brand-black transition-colors group-hover:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray transition-colors group-hover:text-white/80">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
