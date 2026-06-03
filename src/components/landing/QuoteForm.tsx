import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome").max(120),
  perfil: z.enum(["empresa", "individual"]),
  telefone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+0-9()\s-]*$/, "Telefone inválido")
    .optional()
    .or(z.literal("")),
  email: z.string().trim().email("E-mail inválido").max(255),
  pedido: z.string().trim().max(1000).optional().or(z.literal("")),
  consentimento: z.boolean().refine((v) => v === true, {
    message: "Tem de aceitar a política de privacidade para continuar",
  }),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      perfil: "empresa",
      nome: "",
      telefone: "",
      email: "",
      pedido: "",
      consentimento: false,
    },
  });

  const perfil = watch("perfil");
  const consentimento = watch("consentimento");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    console.log("Quote request:", values);
    toast.success("Pedido enviado!", {
      description: "A nossa equipa entra em contacto em menos de 24 horas úteis.",
    });
    reset();
    setSubmitting(false);
    navigate({ to: "/obrigado" });
  };

  return (
    <div
      id="orcamento"
      className="overflow-hidden rounded-sm bg-white ring-1 ring-brand-red/20 shadow-[0_8px_40px_-12px_rgba(214,40,40,0.25)]"
    >
      <div className="bg-brand-red px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-white/15">
            <ShieldCheck className="size-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Pedir Orçamento</h2>
            <p className="mt-0.5 text-sm text-white/80">Resposta em menos de 24 horas úteis.</p>
          </div>
        </div>
      </div>
      <form className="p-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Nome*
          </label>
          <input
            id="nome"
            type="text"
            autoComplete="name"
            {...register("nome")}
            className="mt-2 block w-full border-b-2 border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors"
          />
          {errors.nome && <p className="mt-1 text-xs text-brand-red">{errors.nome.message}</p>}
        </div>

        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Perfil*
          </span>
          <div className="mt-3 flex gap-3">
            {([
              { v: "empresa", l: "Empresa" },
              { v: "individual", l: "Individual" },
            ] as const).map((opt) => {
              const active = perfil === opt.v;
              return (
                <button
                  type="button"
                  key={opt.v}
                  onClick={() => setValue("perfil", opt.v, { shouldValidate: true })}
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-sm border-2 py-3 text-sm font-semibold transition-all ${
                    active
                      ? "border-brand-red bg-brand-red/5 text-brand-red"
                      : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
                  }`}
                  aria-pressed={active}
                >
                  {opt.l}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="telefone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Telefone
            </label>
            <input
              id="telefone"
              type="tel"
              autoComplete="tel"
              {...register("telefone")}
              className="mt-2 block w-full border-b-2 border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors"
            />
            {errors.telefone && (
              <p className="mt-1 text-xs text-brand-red">{errors.telefone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
              E-mail*
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className="mt-2 block w-full border-b-2 border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors"
            />
            {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="pedido" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Pedido (Opcional)
          </label>
          <textarea
            id="pedido"
            rows={3}
            placeholder="Descreva as suas necessidades..."
            {...register("pedido")}
            className="mt-2 block w-full border-b-2 border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors resize-none"
          />
        </div>

        <div className="rounded-sm bg-neutral-50 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              {...register("consentimento")}
              className="mt-0.5 size-4 shrink-0 cursor-pointer accent-brand-red"
            />
            <span className="text-xs leading-relaxed text-neutral-600">
              Li e aceito a{" "}
              <span className="font-medium text-neutral-800 underline decoration-brand-red/40 underline-offset-2">
                política de privacidade
              </span>{" "}
              e o tratamento dos meus dados para fins de contacto comercial.*
            </span>
          </label>
          {errors.consentimento && (
            <p className="mt-2 text-xs text-brand-red">{errors.consentimento.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting || !consentimento}
          className="w-full bg-brand-red py-4 text-sm font-bold text-white uppercase tracking-wide transition-all hover:bg-brand-red/90 active:scale-[0.98] shadow-lg shadow-brand-red/25 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          {submitting ? "A enviar..." : "Enviar Pedido de Orçamento"}
        </button>
      </form>
    </div>
  );
}
