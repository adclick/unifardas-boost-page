import industriaAsset from "@/assets/sector-industria.webp.asset.json";
import saudeAsset from "@/assets/sector-saude.webp.asset.json";
import servicosAsset from "@/assets/sector-servicos.webp.asset.json";
import restauracaoAsset from "@/assets/sector-restauracao.webp.asset.json";
import ensinoAsset from "@/assets/sector-ensino.webp.asset.json";
import corporateAsset from "@/assets/sector-corporate.webp.asset.json";

const industria = industriaAsset.url;
const saude = saudeAsset.url;
const servicos = servicosAsset.url;
const restauracao = restauracaoAsset.url;
const ensino = ensinoAsset.url;
const corporate = corporateAsset.url;
import { ArrowRight } from "lucide-react";

const sectors = [
  { label: "Indústria", src: industria },
  { label: "Saúde e bem-estar", src: saude },
  { label: "Serviços", src: servicos },
  { label: "Restauração e hotelaria", src: restauracao },
  { label: "Ensino", src: ensino },
  { label: "Corporate e serviços", src: corporate },
];

export function SectorMosaic() {
  return (
    <section id="setores" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-sm bg-brand-red/10 px-3 py-1.5 text-xs font-semibold text-brand-red uppercase ring-1 ring-brand-red/20">
              <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
              Setores
            </span>
            <h2 className="mt-4 text-[40px] font-bold tracking-tight text-brand-black">
              Setores que vestimos
            </h2>
          </div>
          <p className="lg:col-span-5 text-[20px] font-light leading-[28px] text-brand-gray">
            Desenvolvemos soluções de vestuário profissional adaptadas às
            necessidades de diferentes áreas de atividade.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {sectors.map((s) => (
            <figure
              key={s.label}
              className="group relative aspect-[3/4] overflow-hidden bg-brand-light"
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                width={800}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="block h-0.5 w-10 bg-brand-red transition-all duration-500 group-hover:w-20" />
                <p className="mt-3 text-base font-bold uppercase tracking-wide text-white sm:text-lg">
                  {s.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-16 flex flex-col items-start gap-6 bg-brand-red p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h3 className="text-[32px] font-bold tracking-tight text-white">
              O seu setor não está aqui?
            </h3>
            <p className="mt-3 max-w-xl text-[20px] text-white/75">
              Criamos soluções à medida para qualquer atividade profissional.
            </p>
          </div>
          <a
            href="#orcamento"
            className="inline-flex shrink-0 items-center gap-2 border border-white/30 bg-white/15 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/25 active:scale-[0.98]"
          >
            Pedir orçamento <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
