import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";

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

  const inputBase =
    "block w-full border-2 border-brand-light bg-white px-4 py-3 text-sm text-brand-black placeholder:text-brand-gray/60 focus:border-brand-red focus:outline-none transition-colors";

  return (
    <div
      id="orcamento"
      className="overflow-hidden bg-white shadow-2xl shadow-black/40 ring-1 ring-black/5"
    >
      <div className="bg-brand-red px-7 py-6">
        <h3 className="text-[32px] font-bold tracking-tight text-white">
          Peça o seu orçamento
        </h3>
        <p className="mt-1 text-base text-white/85">
          Resposta em menos de 24 horas úteis.
        </p>
      </div>
      <form className="space-y-5 p-7" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label
            htmlFor="nome"
            className="block text-[11px] font-bold uppercase tracking-wider text-brand-black"
          >
            Nome*
          </label>
          <input
            id="nome"
            type="text"
            autoComplete="name"
            placeholder="O seu nome"
            {...register("nome")}
            className={`mt-2 ${inputBase}`}
          />
          {errors.nome && (
            <p className="mt-1 text-xs text-brand-red">{errors.nome.message}</p>
          )}
        </div>

        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-black">
            Perfil*
          </span>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {(
              [
                { v: "empresa", l: "Empresa" },
                { v: "individual", l: "Individual" },
              ] as const
            ).map((opt) => {
              const active = perfil === opt.v;
              return (
                <button
                  type="button"
                  key={opt.v}
                  onClick={() =>
                    setValue("perfil", opt.v, { shouldValidate: true })
                  }
                  className={`cursor-pointer border-2 py-3 text-sm transition-all ${
                    active
                      ? "border-brand-red bg-brand-red/10 text-brand-red"
                      : "border-brand-light bg-white text-brand-gray hover:border-brand-gray/40"
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
            <label
              htmlFor="telefone"
              className="block text-[11px] font-bold uppercase tracking-wider text-brand-black"
            >
              Telefone
            </label>
            <input
              id="telefone"
              type="tel"
              autoComplete="tel"
              placeholder="+351"
              {...register("telefone")}
              className={`mt-2 ${inputBase}`}
            />
            {errors.telefone && (
              <p className="mt-1 text-xs text-brand-red">
                {errors.telefone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[11px] font-bold uppercase tracking-wider text-brand-black"
            >
              E-mail*
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="empresa@exemplo.pt"
              {...register("email")}
              className={`mt-2 ${inputBase}`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-brand-red">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="pedido"
            className="block text-[11px] font-bold uppercase tracking-wider text-brand-black"
          >
            Pedido (Opcional)
          </label>
          <textarea
            id="pedido"
            rows={3}
            placeholder="Descreva as suas necessidades..."
            {...register("pedido")}
            className={`mt-2 resize-none ${inputBase}`}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            {...register("consentimento")}
            className="mt-0.5 size-4 shrink-0 cursor-pointer accent-brand-red"
          />
          <span className="text-xs leading-relaxed text-brand-gray">
            Li e aceito a{" "}
            <Link
              to="/privacidade"
              className="font-semibold text-brand-black underline decoration-brand-red underline-offset-2 hover:text-brand-red"
            >
              política de privacidade
            </Link>{" "}
            e o tratamento dos meus dados para fins de contacto comercial.*
          </span>
        </label>
        {errors.consentimento && (
          <p className="-mt-3 text-xs text-brand-red">
            {errors.consentimento.message}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting || !consentimento}
          className="inline-flex w-full items-center justify-center gap-2 bg-brand-red py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-red/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <ArrowRight className="size-4" />
          )}
          {submitting ? "A enviar..." : "Enviar pedido"}
        </button>
      </form>
    </div>
  );
}
