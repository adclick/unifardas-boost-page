import { createFileRoute } from "@tanstack/react-router";
import { LandingHeader } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { SectorMosaic } from "@/components/landing/SectorMosaic";
import { SocialProof } from "@/components/landing/SocialProof";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { LandingFooter } from "@/components/landing/Footer";
import heroUniforms from "@/assets/hero-uniforms.jpg";

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
      <main className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col-reverse gap-10 py-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-7">
            <div className="relative h-72 overflow-hidden rounded-sm ring-1 ring-black/5 sm:h-96 lg:h-full lg:min-h-[640px]">
              <img
                src={heroUniforms}
                alt="Fardamento profissional Unifardas"
                width={1024}
                height={1280}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-3 py-1.5 text-xs font-semibold tracking-widest text-white uppercase">
                  Produção Nacional
                </span>
                <h2 className="mt-4 max-w-md text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                  A farda que comunica a excelência do seu negócio.
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <QuoteForm />
          </div>
        </div>
        <div className="py-12 lg:py-20">
          <Hero />
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
