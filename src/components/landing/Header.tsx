import logo from "@/assets/unifardas-logo-2019.png.asset.json";

const nav = [
  { href: "#vantagens", label: "Vantagens" },
  { href: "#setores", label: "Setores" },
  { href: "#sobre", label: "Sobre" },
  { href: "#clientes", label: "Clientes" },
];

export function LandingHeader() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md ring-1 ring-black/5">
      <div className="flex h-20 w-full items-center justify-between px-4 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="Unifardas">
          <img
            src={logo.url}
            alt="Unifardas"
            className="h-16 w-auto md:h-20"
          />
        </a>
        <nav className="flex items-center gap-2 sm:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-brand-black transition-colors hover:text-brand-red after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
