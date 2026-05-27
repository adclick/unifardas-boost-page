export function LandingFooter() {
  return (
    <footer className="mt-24 bg-brand-black py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-zinc-800 flex items-center justify-center rounded-sm">
              <div className="h-3 w-0.5 bg-brand-red" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white uppercase">
              Unifardas
            </span>
          </div>
          <p className="text-xs font-light">
            © {new Date().getFullYear()} Unifardas. Fabricado em Portugal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
