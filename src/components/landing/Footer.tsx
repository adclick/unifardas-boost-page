import logoAsset from "@/assets/unifardas-logo-2019.png.asset.json";
import cert18 from "@/assets/cert-excelencia-18.png.asset.json";
import cert22 from "@/assets/cert-pme-lider-22.png.asset.json";
import cert23 from "@/assets/cert-pme-lider-23.png.asset.json";
import cert24 from "@/assets/cert-pme-lider-24.png.asset.json";
import cert25 from "@/assets/cert-pme-lider-25.png.asset.json";
import certEic from "@/assets/cert-eic-iso-9001.png.asset.json";
import certOeko from "@/assets/cert-oeko-tex-step.png.asset.json";
import { Link } from "@tanstack/react-router";

const certifications = [
  { src: cert18.url, alt: "PME Excelência 2018" },
  { src: cert22.url, alt: "PME Líder 2022" },
  { src: cert23.url, alt: "PME Líder 2023" },
  { src: cert24.url, alt: "PME Líder 2024" },
  { src: cert25.url, alt: "PME Líder 2025" },
  { src: certEic.url, alt: "EIC ISO 9001 — Certificação acreditada IPAC" },
  { src: certOeko.url, alt: "OEKO-TEX STeP" },
];

export function LandingFooter() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Certifications strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.05em] text-white/50">
            Certificações
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {certifications.map(({ src, alt }) => (
              <div
                key={alt}
                className="flex h-20 items-center justify-center rounded-md bg-white px-4 py-2"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="Unifardas"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Fardas profissionais personalizadas. Produção nacional, qualidade
              garantida.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#solucoes" className="text-white/80 hover:text-brand-red-bright">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#setores" className="text-white/80 hover:text-brand-red-bright">
                  Setores
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/80 hover:text-brand-red-bright">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#orcamento" className="text-white/80 hover:text-brand-red-bright">
                  Pedir orçamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Legal
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/privacidade"
                  className="text-white/80 hover:text-brand-red-bright"
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <a
                  href="https://unifardas.pt/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-brand-red-bright"
                >
                  Loja online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Unifardas. Fabricado em Portugal. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
