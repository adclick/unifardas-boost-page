import { createFileRoute } from "@tanstack/react-router";
import { LandingHeader } from "@/components/landing/Header";

import { Benefits } from "@/components/landing/Benefits";
import { SectorMosaic } from "@/components/landing/SectorMosaic";
import { SocialProof } from "@/components/landing/SocialProof";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { LandingFooter } from "@/components/landing/Footer";
import hero640 from "@/assets/hero-640.webp.asset.json";
import hero1024 from "@/assets/hero-1024.webp.asset.json";
import heroFull from "@/assets/hero-full.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unifardas — Fardamento Profissional | Pedir Orçamento" },
      {
        name: "description",
        content:
          "Unifardas: vestuário profissional premium para hotelaria, saúde, indústria e corporate. Peça o seu orçamento em menos de 24 horas.",
      },
      { property: "og:title", content: "Unifardas — Fardamento Profissional" },
      {
        property: "og:description",
        content:
          "Fardas técnicas, duráveis e personalizadas. Produção nacional. Peça orçamento.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-neutral-900 selection:bg-brand-red selection:text-white">
      <LandingHeader />
      <main>
        {/* Hero full-bleed */}
        <section className="relative overflow-hidden bg-gradient-to-b from-neutral-100 via-neutral-50 to-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-12 pb-0 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-20 lg:pb-24">
            {/* Left: copy */}
            <div className="relative z-20 lg:col-span-6 lg:pt-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                Fardamento Profissional
              </span>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
                A farda que comunica a <span className="text-brand-red">excelência</span> do seu negócio.
              </h1>
              <p className="mt-6 max-w-[46ch] text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
                Produzimos uniformes técnicos com corte de alfaiataria, tecidos certificados e personalização total para a sua equipa.
              </p>
            </div>

            {/* Right: form (in-flow on mobile, floating on desktop) */}
            <div className="relative z-20 lg:col-span-5 lg:col-start-8 lg:-mb-24">
              <QuoteForm />
            </div>
          </div>

          {/* Hero image — full width floating on top, behind copy/form on desktop */}
          <div className="relative z-10 -mt-6 lg:mt-0 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-0 lg:pointer-events-none">
            <div className="mx-auto flex max-w-7xl items-end justify-center lg:h-full lg:justify-start lg:pl-[28%]">
              <img
                src={hero1024.url}
                srcSet={`${hero640.url} 640w, ${hero1024.url} 1024w, ${heroFull.url} 1600w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Profissionais com fardamento Unifardas"
                width={900}
                height={620}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full max-w-md object-contain object-bottom sm:max-w-lg lg:max-w-[640px] lg:translate-y-0 xl:max-w-[720px]"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          
          <Benefits />
          <SectorMosaic />
          <SocialProof />
          <TestimonialsCarousel />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

