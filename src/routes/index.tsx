import { createFileRoute } from "@tanstack/react-router";
import { LandingHeader } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { SectorMosaic } from "@/components/landing/SectorMosaic";
import { SocialProof } from "@/components/landing/SocialProof";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { LandingFooter } from "@/components/landing/Footer";

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
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="py-12 lg:col-span-7 lg:py-24">
            <Hero />
            <Benefits />
            <SectorMosaic />
            <SocialProof />
          </div>
          <div className="relative py-12 lg:col-span-5 lg:py-24">
            <div className="sticky top-24">
              <QuoteForm />
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
