import { createFileRoute } from "@tanstack/react-router";
import { Award, Factory, Clock } from "lucide-react";
import { LandingHeader } from "@/components/landing/Header";
import { Benefits } from "@/components/landing/Benefits";
import { SectorMosaic } from "@/components/landing/SectorMosaic";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";
import { SocialProof } from "@/components/landing/SocialProof";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { LandingFooter } from "@/components/landing/Footer";
import heroBg from "@/assets/hero-team.jpeg.asset.json";

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
            <div className="flex flex-col justify-between lg:col-span-7 text-white">
              <div>
                <span className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-3 py-1.5 text-xs font-semibold text-white uppercase ring-1 ring-white/20">
                  <span className="size-1.5 rounded-full bg-white animate-pulse" />
                  Fardas profissionais personalizadas
                </span>
                <h1 className="mt-8 text-balance text-[48px] font-bold leading-[1.05] tracking-tight text-white">
                  Fardas profissionais que{" "}
                  <span className="text-brand-red-bright">valorizam a imagem</span>{" "}
                  da sua empresa e acompanham o ritmo do seu negócio.
                </h1>
                <p className="mt-8 max-w-[55ch] text-pretty text-xl sm:text-2xl leading-relaxed text-white/90 font-light">
                  Uniformes à medida com tecidos de alta qualidade, personalização
                  completa e entrega rápida em Portugal continental e ilhas.
                </p>
              </div>

              <div className="mt-12 lg:mt-0 flex flex-wrap items-stretch gap-3 text-white">
                {[
                  { Icon: Award, label: "30 anos" },
                  { Icon: Factory, label: "Produção nacional" },
                  { Icon: Clock, label: "Resposta 24h" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm"
                  >
                    <Icon className="size-6 shrink-0 text-brand-red-bright" strokeWidth={2} />
                    <span className="text-sm font-semibold tracking-wide">
                      {label}
                    </span>
                  </div>
                ))}
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
