import { useEffect, useRef, useState, type ReactNode } from "react";
import bgAsset from "@/assets/sobre-nos-bg-new.jpeg.asset.json";

const stats = [
  { value: 10000, prefix: "", suffix: "", label: <>referências em<br />fardas profissionais</>, format: "dot" },
  { value: 500, prefix: "", suffix: "", label: <>peças produzidas<br />todos os dias</>, format: "plain" },
  { value: 10000, prefix: "", suffix: "", label: <>entidades que conhecem<br />os artigos da Unifardas</>, format: "dot" },
  { value: 95, prefix: "", suffix: "%", label: <>de clientes com elevado<br />grau de satisfação</>, format: "plain" },
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
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: ReactNode;
  format: string;
  visible: boolean;
}) {
  const n = useCountUp(value, visible);
  return (
    <div className="flex h-full flex-col items-center text-center px-4">
      <div className="text-brand-red font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-none">
        {prefix}
        {formatNumber(n, format)}
        {suffix}
      </div>
      <p className="mt-6 text-base sm:text-lg leading-snug font-medium text-white/90 max-w-[260px] mx-auto">
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
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgAsset.url})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-black/55"
      />
      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-3 py-1.5 text-xs font-semibold text-white uppercase ring-1 ring-white/20">
            <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
            Unifardas
          </span>
          <h2 className="mt-6 text-[40px] font-bold tracking-tight text-white whitespace-nowrap">
            Os números falam por nós! São mais de....
          </h2>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 items-stretch lg:divide-x lg:divide-white/15">
          {stats.map((s, idx) => (
            <Stat key={idx} {...s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
