import logoAsset from "@/assets/unifardas-logo-2019.png.asset.json";
import { Award, BadgeCheck, Leaf } from "lucide-react";
import { Link } from "@tanstack/react-router";

const certifications = [
  { icon: Leaf, label: "OEKO-TEX", sub: "Ecotext Step" },
  { icon: BadgeCheck, label: "ISO 9001", sub: "Certificada" },
  { icon: Award, label: "PME Líder", sub: "Reconhecida" },
];

export function LandingFooter() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Certifications strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Certificações
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {certifications.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex size-12 shrink-0 items-center justify-center bg-brand-red text-white">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-white">
                    {label}
                  </p>
                  <p className="text-xs text-white/60">{sub}</p>
                </div>
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
