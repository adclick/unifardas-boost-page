## Landing Page Unifardas — Plano

Página única de alta conversão em PT-PT, baseada na direção **Split-Screen** escolhida. Sem links de fuga: header minimal com um único CTA âncora, formulário sticky sempre visível no desktop.

### Estrutura (uma rota `/`)

- **Header sticky**: logo Unifardas + botão único "Pedir orçamento" (âncora `#orcamento`)
- **Coluna esquerda (7/12)**:
  - Hero: eyebrow vermelha + headline + subheadline
  - 2 benefícios chave (Produção Própria, Prazos Rigorosos)
  - Mosaico de 4 sectores (Hotelaria, Indústria, Saúde, Corporate) com imagens geradas
  - Faixa discreta de prova social ("Confiança de líderes de setor")
- **Coluna direita (5/12)**: card de formulário **sticky** com header preto
- **Footer minimal** preto

### Formulário

Campos exatamente como pedido:
- Nome* (texto)
- Perfil* (Empresa / Individual — radio buttons estilizados)
- Telefone (tel)
- E-mail* (email)
- Pedido (textarea opcional)
- Botão "Enviar Pedido de Orçamento"

Validação com Zod + react-hook-form. Submissão mostra toast de sucesso (sonner) e limpa o formulário. Sem backend nesta fase — o envio é tratado no cliente; podemos ligar a Lovable Cloud + email mais tarde se quiseres.

### Design tokens (copiados do protótipo, em `src/styles.css`)

- `--brand-black: oklch(0.205 0 0)` (#1a1a1a)
- `--brand-red: oklch(0.555 0.22 27)` (#d62828)
- Tipografia: **Inter** (400/500/600) via Google Fonts
- Fundo `zinc-50`, cantos `rounded-sm`, raio discreto

### Ficheiros a criar/editar

- `src/styles.css` — adicionar tokens brand-black/brand-red, importar Inter
- `src/routes/index.tsx` — substituir placeholder pela landing completa
- `src/components/landing/Header.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/Benefits.tsx`
- `src/components/landing/SectorMosaic.tsx` (com 4 imagens geradas)
- `src/components/landing/SocialProof.tsx`
- `src/components/landing/QuoteForm.tsx` (RHF + Zod + toast)
- `src/components/landing/Footer.tsx`
- 4 imagens em `src/assets/` (hotelaria, indústria, saúde, corporate) via imagegen
- Adicionar `<Toaster />` (sonner) no root

### SEO

`head()` da rota `/`: title "Unifardas — Fardamento Profissional | Pedir Orçamento", meta description PT-PT, og:title, og:description.

### Fora de scope (a confirmar depois)

- Envio real do formulário por email (precisa de Lovable Cloud + serviço de email)
- Página de obrigado, política de privacidade
- Logos reais de clientes na prova social (placeholders cinzentos por agora)
