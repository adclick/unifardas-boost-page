import { Factory, Clock, Scissors, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Factory,
    title: "Produção Própria",
    desc: "Controlo total de qualidade desde o fio à costura final em território nacional.",
  },
  {
    icon: Clock,
    title: "Prazos Rigorosos",
    desc: "Logística otimizada para garantir que a sua equipa nunca fica sem fardamento.",
  },
  {
    icon: Scissors,
    title: "Personalização Total",
    desc: "Bordados, estampagem e cortes à medida com a identidade da sua marca.",
  },
  {
    icon: ShieldCheck,
    title: "Tecidos Certificados",
    desc: "Materiais resistentes, confortáveis e em conformidade com normas técnicas.",
  },
];

export function Benefits() {
  return (
    <section className="mt-20 grid gap-8 sm:grid-cols-2">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title}>
          <div className="mb-4 flex size-10 items-center justify-center rounded-sm bg-zinc-100 ring-1 ring-black/5">
            <Icon className="size-4 text-brand-black shrink-0" strokeWidth={2} />
          </div>
          <h3 className="text-base font-semibold text-brand-black">{title}</h3>
          <p className="mt-2 max-w-[35ch] text-pretty text-sm text-neutral-600">{desc}</p>
        </div>
      ))}
    </section>
  );
}
