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
        <div key={title} className="group relative pl-5 border-l-2 border-neutral-200 transition-colors hover:border-brand-red">
          <div className="mb-4 flex size-10 items-center justify-center rounded-sm bg-brand-red/10 ring-1 ring-brand-red/20 transition-colors group-hover:bg-brand-red group-hover:ring-brand-red">
            <Icon className="size-4 text-brand-red shrink-0 transition-colors group-hover:text-white" strokeWidth={2.5} />
          </div>
          <h3 className="text-base font-semibold text-brand-black">{title}</h3>
          <p className="mt-2 max-w-[35ch] text-pretty text-sm text-neutral-600">{desc}</p>
        </div>
      ))}
    </section>
  );
}
