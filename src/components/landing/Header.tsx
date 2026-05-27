import logo from "@/assets/unifardas-logo.png";
import { Plus } from "lucide-react";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md ring-1 ring-black/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Unifardas" className="h-9 w-auto" width={36} height={36} />
        </a>
        <a
          href="#orcamento"
          className="inline-flex items-center justify-center rounded-sm bg-brand-red py-2 pr-3 pl-2 text-sm font-medium text-white transition-colors hover:bg-brand-red/90 ring-2 ring-brand-red ring-offset-2 ring-offset-background"
        >
          <Plus className="mr-1.5 size-4 shrink-0" strokeWidth={2.5} />
          Pedir orçamento
        </a>
      </div>
    </header>
  );
}
