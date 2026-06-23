import c1 from "@/assets/clients/client-1.jpeg.asset.json";
import c2 from "@/assets/clients/client-2.jpeg.asset.json";
import c3 from "@/assets/clients/client-3.jpeg.asset.json";
import c4 from "@/assets/clients/client-4.jpeg.asset.json";
import c5 from "@/assets/clients/client-5.jpeg.asset.json";
import c6 from "@/assets/clients/client-6.jpeg.asset.json";
import c7 from "@/assets/clients/client-7.jpeg.asset.json";
import c8 from "@/assets/clients/client-8.jpeg.asset.json";
import c9 from "@/assets/clients/client-9.jpeg.asset.json";
import c10 from "@/assets/clients/client-10.jpeg.asset.json";
import c11 from "@/assets/clients/client-11.jpeg.asset.json";
import c12 from "@/assets/clients/client-12.jpeg.asset.json";
import c13 from "@/assets/clients/client-13.jpeg.asset.json";
import c14 from "@/assets/clients/client-14.jpeg.asset.json";
import c15 from "@/assets/clients/client-15.jpeg.asset.json";
import c16 from "@/assets/clients/client-16.jpeg.asset.json";
import c17 from "@/assets/clients/client-17.jpeg.asset.json";
import c18 from "@/assets/clients/client-18.jpeg.asset.json";

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
  { src: c10.url, alt: "DEKRA" },
  { src: c11.url, alt: "NIDO Montessori Lisboa" },
  { src: c12.url, alt: "Agrovete" },
  { src: c13.url, alt: "Paços de Ferreira" },
  { src: c14.url, alt: "JANZ" },
  { src: c15.url, alt: "Cliente" },
  { src: c16.url, alt: "Rui Paula" },
  { src: c17.url, alt: "Topázio" },
  { src: c18.url, alt: "Fnac" },
];

export function ClientsMarquee() {
  const loop = [...logos, ...logos];
  return (
    <div className="overflow-hidden">
      <div
        className="relative group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((l, i) => (
            <div
              key={i}
              className="flex h-28 w-44 shrink-0 items-center justify-center"
            >
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="max-h-24 max-w-[180px] object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
