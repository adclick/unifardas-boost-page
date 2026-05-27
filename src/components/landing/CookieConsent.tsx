import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("unifardas_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("unifardas_cookie_consent", "accepted");
    setDismissed(true);
    setTimeout(() => setVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem("unifardas_cookie_consent", "declined");
    setDismissed(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out ${
        dismissed ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-12">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 size-5 shrink-0 text-brand-red" />
            <div>
              <p className="text-sm font-medium text-neutral-900">
                Este site utiliza cookies
              </p>
              <p className="mt-0.5 max-w-xl text-xs leading-relaxed text-neutral-500">
                Utilizamos cookies essenciais para o funcionamento do site e para melhorar a sua experiência.
                Ao continuar, concorda com a nossa política de privacidade.
              </p>
            </div>
          </div>
          <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 rounded-sm border border-neutral-200 px-4 py-2.5 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50 sm:flex-none"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 rounded-sm bg-brand-black px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 sm:flex-none"
            >
              Aceitar
            </button>
            <button
              onClick={handleDecline}
              className="ml-1 rounded-sm p-2 text-neutral-400 transition-colors hover:text-neutral-600"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
