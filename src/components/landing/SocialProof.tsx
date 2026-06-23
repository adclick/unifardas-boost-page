import { useEffect, useRef, useState, type ReactNode } from "react";
import { Award, Shirt, Building2, Heart } from "lucide-react";
import bgAsset from "@/assets/sobre-nos-bg.jpeg.asset.json";

const stats = [
  { value: 10000, prefix: "", suffix: "", label: <>referências em<br />fardas profissionais</>, format: "dot", icon: Award },
  { value: 500, prefix: "", suffix: "", label: <>peças produzidas<br />todos os dias</>, format: "plain", icon: Shirt },
  { value: 10000, prefix: "", suffix: "", label: "entidades que conhecem nossos artigos", format: "dot", icon: Building2 },
  { value: 95, prefix: "", suffix: "%", label: "de clientes com elevado grau de satisfação", format: "plain", icon: Heart },
];


function useCountUp(target: number, start: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

function formatNumber(n: number, format: string) {
  if (format === "dot") return n.toLocaleString("de-DE");
  return n.toString();
}

function Stat({
  value,
  prefix,
  suffix,
  label,
  format,
  visible,
  icon: Icon,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: ReactNode;
  format: string;
  visible: boolean;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  const n = useCountUp(value, visible);
  return (
    <div className="flex h-full flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/10 p-4 ring-1 ring-white/20">
        <Icon className="size-8 text-brand-red" strokeWidth={1.5} />
      </div>
      <div className="text-brand-red font-bold tracking-tight text-6xl sm:text-7xl lg:text-8xl">
        {prefix}
        {formatNumber(n, format)}
        {suffix}
      </div>
      <p className="mt-4 text-[22px] leading-[30px] font-light text-white max-w-[280px] mx-auto">
        {label}
      </p>
    </div>
  );
}



export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="relative bg-black py-24 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bgAsset.url})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90"
      />
      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-3 py-1.5 text-xs font-semibold text-white uppercase ring-1 ring-white/20">
            <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
            Sobre nós
          </span>
          <h2 className="mt-6 text-[40px] font-bold tracking-tight text-white whitespace-nowrap">
            Os números falam por nós! São mais de....
          </h2>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15 items-stretch">
          {stats.map((s, idx) => (
            <div key={idx} className="lg:px-8 min-h-[260px]">
              <Stat {...s} visible={visible} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
