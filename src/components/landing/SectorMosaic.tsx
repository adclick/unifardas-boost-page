import hotelaria from "@/assets/sector-hotelaria.jpg";
import industria from "@/assets/sector-industria.jpg";
import saude from "@/assets/sector-saude.jpg";
import corporate from "@/assets/sector-corporate.jpg";

function Tile({
  src,
  label,
  aspect,
  width,
  height,
}: {
  src: string;
  label: string;
  aspect: string;
  width: number;
  height: number;
}) {
  return (
    <figure
      className={`relative w-full ${aspect} overflow-hidden rounded-[min(1vw,12px)] bg-zinc-200 outline-1 -outline-offset-1 outline-black/5`}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        width={width}
        height={height}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-sm bg-background/85 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-brand-black backdrop-blur">
        {label}
      </figcaption>
    </figure>
  );
}

export function SectorMosaic() {
  return (
    <section className="mt-24">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">Setores</span>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-black">
          Sectores que vestimos
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Soluções específicas para cada exigência profissional.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <Tile src={hotelaria} label="Hotelaria" aspect="aspect-[3/4]" width={600} height={800} />
          <Tile src={industria} label="Indústria" aspect="aspect-[3/2]" width={600} height={400} />
        </div>
        <div className="space-y-4 pt-12">
          <Tile src={saude} label="Saúde" aspect="aspect-square" width={600} height={600} />
          <Tile src={corporate} label="Corporate" aspect="aspect-[3/4]" width={600} height={800} />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start gap-4 rounded-sm bg-brand-black p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-base font-semibold text-white sm:text-lg">
            O seu setor não está listado?
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Produzimos por medida para qualquer atividade profissional.
          </p>
        </div>
        <a
          href="#orcamento"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-red/30 transition-all hover:bg-brand-red/90 active:scale-[0.98]"
        >
          Falar connosco
        </a>
      </div>
    </section>
  );
}
