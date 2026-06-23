import c1 from "@/assets/clients/client-1.jpeg.asset.json";
import c2 from "@/assets/clients/client-2.jpeg.asset.json";
import c3 from "@/assets/clients/client-3.jpeg.asset.json";
import c4 from "@/assets/clients/client-4.jpeg.asset.json";
import c5 from "@/assets/clients/client-5.jpeg.asset.json";
import c6 from "@/assets/clients/client-6.jpeg.asset.json";
import c7 from "@/assets/clients/client-7.jpeg.asset.json";
import c8 from "@/assets/clients/client-8.jpeg.asset.json";
import c9 from "@/assets/clients/client-9.jpeg.asset.json";

const logos = [
  { src: c1.url, alt: "Dom Duarte" },
  { src: c2.url, alt: "Colégio da Areosa" },
  { src: c3.url, alt: "Citiauto" },
  { src: c4.url, alt: "Botelho & Rodrigues" },
  { src: c5.url, alt: "Flysteel" },
  { src: c6.url, alt: "Duartesfer" },
  { src: c7.url, alt: "eTuk Factory" },
  { src: c8.url, alt: "Universidade Lusíada" },
  { src: c9.url, alt: "Abraço" },
];

export function ClientsMarquee() {
  const loop = [...logos, ...logos];
  return (
    <section id="clientes" className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-black/5 px-3 py-1.5 text-xs font-semibold text-black/70 uppercase ring-1 ring-black/10">
            <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
            Clientes
          </span>
          <h2 className="mt-6 text-[32px] sm:text-[40px] font-bold tracking-tight text-black">
            Marcas que confiam em nós
          </h2>
        </div>
      </div>

      <div
        className="relative mt-14 group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {loop.map((l, i) => (
            <div
              key={i}
              className="flex h-24 w-44 shrink-0 items-center justify-center"
            >
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="max-h-20 max-w-[160px] object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
