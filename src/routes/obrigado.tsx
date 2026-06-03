import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado — Unifardas" },
      {
        name: "description",
        content: "Agradecemos o seu contacto. Será redirecionado para a nossa loja online.",
      },
    ],
  }),
  component: ObrigadoPage,
});

const REDIRECT_URL = "https://unifardas.pt/";
const REDIRECT_DELAY = 5; // segundos

function ObrigadoPage() {
  const [countdown, setCountdown] = useState(REDIRECT_DELAY);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = REDIRECT_URL;
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-100 via-neutral-50 to-white px-6">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-red/10">
          <CheckCircle className="size-10 text-brand-red" />
        </div>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
          Obrigado pelo seu pedido!
        </h1>

        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          Recebemos o seu orçamento. A nossa equipa comercial entra em contacto
          consigo em menos de <span className="font-semibold text-brand-black">24 horas úteis</span>.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-5 py-2.5 text-sm text-neutral-600">
          <Clock className="size-4 text-brand-red" />
          <span>Redirecionamento para a loja em</span>
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
            {countdown}
          </span>
          <span>{countdown === 1 ? "segundo" : "segundos"}</span>
        </div>

        <div className="mt-8">
          <a
            href={REDIRECT_URL}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red/90 active:scale-[0.98]"
          >
            Ir para a Loja Online
            <ArrowRight className="size-4" />
          </a>
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          Se o redirecionamento não funcionar,{" "}
          <a href={REDIRECT_URL} className="underline decoration-brand-red/40 underline-offset-2 hover:text-neutral-600">
            clique aqui
          </a>
          .
        </p>
      </div>
    </div>
  );
}
