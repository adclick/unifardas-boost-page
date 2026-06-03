import logoAsset from "@/assets/unifardas-logo-new.png.asset.json";

export function LandingFooter() {
  return (
    <footer className="mt-24 bg-brand-black py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Unifardas"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-xs font-light">
            © {new Date().getFullYear()} Unifardas. Fabricado em Portugal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
