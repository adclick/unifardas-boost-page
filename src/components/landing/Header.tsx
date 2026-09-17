import logo from "@/assets/unifardas-logo-2019.png.asset.json";

const nav = [
  { href: "#vantagens", label: "Vantagens" },
  { href: "#setores", label: "Setores" },
  { href: "#sobre", label: "Sobre" },
  { href: "#clientes", label: "Clientes" },
];

export function LandingHeader() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-md ring-1 ring-black/5">
      <div className="grid min-h-20 w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 px-5 sm:flex sm:justify-between sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Unifardas">
          <img
            src={logo.url}
            alt="Unifardas"
            className="h-14 w-auto sm:h-16 md:h-20"
          />
        </a>
        <nav className="flex min-w-0 items-center justify-end gap-2 sm:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap text-[11px] font-semibold text-brand-black transition-colors hover:text-brand-red after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-red after:transition-all hover:after:w-full sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
