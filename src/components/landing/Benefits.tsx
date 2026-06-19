import { Factory, Palette, ShieldCheck, Zap } from "lucide-react";

const items = [
  {
    icon: Factory,
    title: "Produção nacional",
    desc: "Controlo rigoroso de qualidade em todas as fases do processo, garantindo elevados padrões de fabrico.",
  },
  {
    icon: Palette,
    title: "Personalização à medida",
    desc: "Adaptamos cada peça à identidade da sua empresa através de bordados, estampagem, sublimação ou transfer.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade e durabilidade",
    desc: "Tecidos resistentes e confortáveis, preparados para utilização intensiva no dia a dia profissional.",
  },
  {
    icon: Zap,
    title: "Resposta rápida",
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
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative flex flex-col bg-white p-8 transition-colors hover:bg-brand-black"
            >
              <span className="text-xs font-bold text-brand-red">
                0{i + 1}
              </span>
              <div className="mt-4 inline-flex size-14 items-center justify-center bg-brand-red text-white">
                <Icon className="size-7" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-brand-black transition-colors group-hover:text-white">
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
