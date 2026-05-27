import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { perfil: "empresa", nome: "", telefone: "", email: "", pedido: "" },
  });

  const perfil = watch("perfil");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    // Simulate request — ligar a backend depois (Lovable Cloud + email).
    await new Promise((r) => setTimeout(r, 700));
    console.log("Quote request:", values);
    toast.success("Pedido enviado!", {
      description: "A nossa equipa entra em contacto em menos de 24 horas úteis.",
    });
    reset();
    setSubmitting(false);
  };

  return (
    <div
      id="orcamento"
      className="overflow-hidden rounded-sm bg-card ring-1 ring-black/5 shadow-sm"
    >
      <div className="bg-brand-black px-8 py-6">
        <h2 className="text-xl font-medium text-white">Pedir Orçamento</h2>
        <p className="mt-1 text-sm text-neutral-400">Resposta em menos de 24 horas úteis.</p>
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
            className="mt-2 block w-full border-b border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors"
          />
          {errors.nome && <p className="mt-1 text-xs text-brand-red">{errors.nome.message}</p>}
        </div>

        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Perfil*
          </span>
          <div className="mt-3 flex gap-4">
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
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-sm border py-3 text-sm font-medium transition-colors ${
                    active
                      ? "border-brand-red bg-zinc-50 text-brand-black"
                      : "border-neutral-200 text-neutral-700 hover:border-neutral-300"
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
              className="mt-2 block w-full border-b border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors"
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
              className="mt-2 block w-full border-b border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors"
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
            className="mt-2 block w-full border-b border-neutral-200 bg-transparent py-2 text-sm focus:border-brand-red focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-brand-red py-4 text-sm font-semibold text-white transition-transform active:scale-[0.98] ring-2 ring-brand-red ring-offset-2 ring-offset-background disabled:opacity-70 inline-flex items-center justify-center gap-2"
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          {submitting ? "A enviar..." : "Enviar Pedido de Orçamento"}
        </button>

        <p className="text-center text-[10px] leading-relaxed text-neutral-400 text-pretty">
          Ao submeter este formulário, concorda com o processamento dos seus dados para fins de contacto comercial.
        </p>
      </form>
    </div>
  );
}
