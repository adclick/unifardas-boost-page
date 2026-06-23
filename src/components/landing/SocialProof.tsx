import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, prefix: "", suffix: "", label: "referências em fardas profissionais", format: "dot" },
  { value: 500, prefix: "", suffix: "", label: "peças produzidas todos os dias", format: "plain" },
  { value: 10000, prefix: "", suffix: "", label: "entidades que conhecem os artigos da Unifardas", format: "dot" },
  { value: 95, prefix: "", suffix: "%", label: "de clientes com elevado grau de satisfação", format: "plain" },
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
  label: string;
  format: string;
  visible: boolean;
}) {
  const n = useCountUp(value, visible);
  return (
    <div className="text-center">
      <div className="text-brand-red font-bold tracking-tight text-6xl sm:text-7xl">
        {prefix}
        {formatNumber(n, format)}
        {suffix}
      </div>
      <p className="mt-4 text-[20px] leading-[28px] font-light text-white max-w-[260px] mx-auto">
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
    <section id="sobre" className="bg-brand-black py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-3 py-1.5 text-xs font-semibold text-white uppercase ring-1 ring-white/20">
            <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
            Sobre nós
          </span>
          <h2 className="mt-6 text-[32px] sm:text-[40px] font-bold tracking-tight text-white max-w-3xl">
            Os números falam por nós! São mais de....
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((s) => (
            <Stat key={s.label} {...s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
