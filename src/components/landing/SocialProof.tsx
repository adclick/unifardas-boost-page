import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, prefix: "+", suffix: "", label: "Anos de experiência" },
  { value: 100, prefix: "+", suffix: "", label: "Empresas parceiras" },
  { value: 24, prefix: "", suffix: "h", label: "Resposta a orçamentos" },
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

function Stat({
  value,
  prefix,
  suffix,
  label,
  visible,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  visible: boolean;
}) {
  const n = useCountUp(value, visible);
  return (
    <div className="border-l-2 border-brand-red pl-6">
      <div className="flex items-baseline text-white">
        <span className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          {prefix}
          {n}
        </span>
        <span className="text-3xl font-bold sm:text-4xl">{suffix}</span>
      </div>
      <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/70">
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
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-sm bg-brand-red/20 px-3 py-1.5 text-xs font-semibold text-brand-red uppercase ring-1 ring-brand-red/30">
              <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
              Sobre nós
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Tradição e exigência no vestuário profissional.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              A Unifardas é uma empresa portuguesa com sólida experiência e
              tradição no setor do vestuário profissional, dedicada ao
              desenvolvimento e produção de fardas, uniformes, EPIs e vestuário
              técnico. Especializada em soluções personalizadas, adapta cada
              produto à identidade de cada empresa, garantindo qualidade,
              funcionalidade e elevados padrões de exigência em todos os
              projetos.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-10 sm:grid-cols-3 sm:gap-6">
            {stats.map((s) => (
              <Stat key={s.label} {...s} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
