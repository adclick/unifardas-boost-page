import iconAsset from "@/assets/unifardas-icon.svg.asset.json";
import cert18 from "@/assets/cert-excelencia-18.png.asset.json";
import cert22 from "@/assets/cert-pme-lider-22.png.asset.json";
import cert23 from "@/assets/cert-pme-lider-23.png.asset.json";
import cert24 from "@/assets/cert-pme-lider-24.png.asset.json";
import cert25 from "@/assets/cert-pme-lider-25.png.asset.json";
import certEic from "@/assets/cert-eic-iso-9001.png.asset.json";
import certOeko from "@/assets/cert-oeko-tex-step.png.asset.json";
import { Link } from "@tanstack/react-router";

type CertificationItem = { src: string; alt: string };

const certifications: CertificationItem[] = [
  { src: cert18.url, alt: "PME Excelência 2018" },
  { src: certEic.url, alt: "EIC ISO 9001 — Certificação acreditada IPAC" },
  { src: certOeko.url, alt: "OEKO-TEX STeP" },
  { src: cert22.url, alt: "PME Líder 2022" },
  { src: cert23.url, alt: "PME Líder 2023" },
  { src: cert24.url, alt: "PME Líder 2024" },
  { src: cert25.url, alt: "PME Líder 2025" },
];

export function LandingFooter() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Top CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center lg:px-12">
          <p className="text-[36px] font-semibold text-white leading-tight">
            Junte-se aos mais de 10k clientes satisfeitos
          </p>
          <a
            href="#orcamento"
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-bright"
          >
            Pedir orçamento agora
          </a>
        </div>
      </div>

      {/* Main footer: 50/50 */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="grid items-start gap-20 md:grid-cols-2">
          {/* Left: Company */}
          <div>
            <img
              src={iconAsset.url}
              alt="Unifardas"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/75">
              A UNIFARDAS® é uma empresa Portuguesa, dotada de uma sólida
              <br />
              experiência e de uma larga tradição no sector de vestuário profissional.
            </p>
          </div>

          {/* Right: Certifications */}
          <div>
            <h2 className="text-[28px] font-normal leading-[1.1] text-white">
              Certificações.
              <br />
              A prova de confiança.
            </h2>
            <div className="mt-8 grid grid-cols-[repeat(7,4rem)] gap-px">
              {certifications.map((item) => (
                <div
                  key={item.alt}
                  className="flex h-16 w-full items-center justify-center rounded-sm bg-white/90 p-0.5"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Unifardas. Fabricado em Portugal. Todos
            os direitos reservados.
          </p>
          <Link
            to="/privacidade"
            className="text-xs text-white/70 hover:text-brand-red-bright md:ml-auto"
          >
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
