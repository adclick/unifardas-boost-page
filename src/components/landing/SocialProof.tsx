export function SocialProof() {
  return (
    <section className="mt-24 border-t border-neutral-200 pt-12">
      <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
        Confiança de líderes de setor
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6 opacity-70">
        {["HOTELS GROUP", "MEDCARE", "INDUSTRIA+", "VIVA CORP", "GASTRO PT"].map((n) => (
          <span
            key={n}
            className="text-sm font-semibold tracking-widest text-neutral-400 grayscale"
          >
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}
