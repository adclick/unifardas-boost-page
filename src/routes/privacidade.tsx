import { createFileRoute, Link } from "@tanstack/react-router";
import { LandingHeader } from "@/components/landing/Header";
import { LandingFooter } from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Unifardas" },
      {
        name: "description",
        content:
          "Política de privacidade da Unifardas. Saiba como recolhemos, usamos e protegemos os seus dados pessoais.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-brand-black">
      <LandingHeader />
      <main className="pt-20">
        <section className="bg-brand-light py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red hover:text-brand-red-bright"
            >
              <ArrowLeft className="size-4" /> Voltar
            </Link>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-sm text-brand-gray">
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-PT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-10 px-6 text-base leading-relaxed text-brand-gray lg:px-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                1. Identificação do responsável pelo tratamento
              </h2>
              <p className="mt-4">
                A Unifardas é responsável pelo tratamento dos dados pessoais
                recolhidos através deste website, em conformidade com o
                Regulamento Geral sobre a Proteção de Dados (RGPD) e a
                legislação portuguesa aplicável.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                2. Dados recolhidos
              </h2>
              <p className="mt-4">
                Recolhemos apenas os dados estritamente necessários para
                responder ao seu pedido de orçamento ou contacto: nome, e-mail,
                telefone (opcional) e informação sobre o pedido.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                3. Finalidade do tratamento
              </h2>
              <p className="mt-4">
                Os dados são utilizados exclusivamente para:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Resposta a pedidos de orçamento e informação;</li>
                <li>Comunicação comercial relacionada com o seu pedido;</li>
                <li>Cumprimento de obrigações legais e contratuais.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                4. Conservação dos dados
              </h2>
              <p className="mt-4">
                Os dados são conservados pelo período estritamente necessário
                à finalidade para a qual foram recolhidos e, posteriormente,
                pelo prazo legal aplicável.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                5. Direitos do titular dos dados
              </h2>
              <p className="mt-4">
                Pode, a qualquer momento, exercer os seus direitos de acesso,
                retificação, apagamento, limitação, portabilidade e oposição,
                bastando contactar-nos através do e-mail indicado no nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                6. Segurança
              </h2>
              <p className="mt-4">
                A Unifardas adota medidas técnicas e organizativas adequadas
                para proteger os seus dados pessoais contra acessos não
                autorizados, perda, destruição ou alteração.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                7. Cookies
              </h2>
              <p className="mt-4">
                Este website utiliza cookies essenciais ao seu funcionamento e
                cookies analíticos para melhorar a experiência de utilização.
                Pode gerir as suas preferências nas definições do navegador.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                8. Alterações à política
              </h2>
              <p className="mt-4">
                A presente política pode ser atualizada a qualquer momento. A
                versão em vigor é sempre a publicada nesta página.
              </p>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
