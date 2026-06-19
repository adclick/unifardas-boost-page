import { createFileRoute } from "@tanstack/react-router";
import { LandingHeader } from "@/components/landing/Header";
import { Benefits } from "@/components/landing/Benefits";
import { SectorMosaic } from "@/components/landing/SectorMosaic";
import { SocialProof } from "@/components/landing/SocialProof";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { LandingFooter } from "@/components/landing/Footer";
import heroBg from "@/assets/hero-bg-ocean.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unifardas — Fardas Profissionais Personalizadas | Orçamento" },
      {
        name: "description",
        content:
          "Uniformes à medida com tecidos de alta qualidade, personalização completa e entrega rápida em Portugal continental e ilhas.",
      },
      { property: "og:title", content: "Unifardas — Fardas Profissionais Personalizadas" },
      {
        property: "og:description",
        content:
          "Fardas que valorizam a imagem da sua empresa. Produção nacional, personalização total e resposta em 24h.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div
      id="top"
      className="min-h-screen bg-background font-sans text-brand-black selection:bg-brand-red selection:text-white"
    >
      <LandingHeader />
      <main className="pt-20">
        {/* HERO with background image */}
        <section className="relative isolate overflow-hidden">
          {/* bg image */}
          <div className="absolute inset-0 -z-10">
            <img
              src={heroBg.url}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* overlay to keep copy legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-20 pb-24 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pt-32 lg:pb-36">
            {/* Left: copy */}
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 bg-brand-red px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Fardas profissionais personalizadas
              </span>
              <h1 className="mt-6 text-balance text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Fardas profissionais que{" "}
                <span className="text-brand-red-bright">valorizam a imagem</span>{" "}
                da sua empresa e acompanham o ritmo do seu negócio.
              </h1>
              <p className="mt-7 max-w-[55ch] text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                Uniformes à medida com tecidos de alta qualidade, personalização
                completa e entrega rápida em Portugal continental e ilhas.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <span className="block h-px w-8 bg-brand-red-bright" />
                  <span className="font-semibold uppercase tracking-widest">+30 anos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block h-px w-8 bg-brand-red-bright" />
                  <span className="font-semibold uppercase tracking-widest">Produção nacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block h-px w-8 bg-brand-red-bright" />
                  <span className="font-semibold uppercase tracking-widest">Resposta 24h</span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-5">
              <QuoteForm />
            </div>
          </div>
        </section>

        <Benefits />
        <SectorMosaic />
        <SocialProof />
        <TestimonialsCarousel />
      </main>
      <LandingFooter />
    </div>
  );
}
