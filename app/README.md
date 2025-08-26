# Orion – Site em React (Vite)

Site institucional simples em **React** (sem Next e sem Tailwind), com:
- **Rotas** (`react-router-dom`)
- **SEO básico por página** (`react-helmet-async`)
- **Páginas**: Home, Empresa, Serviços, Produtos, Contato
- **Lista de artigos do Blogspot** consumindo RSS via endpoint `/api/rss` (serverless)
- **Formulário de contato** via endpoint `/api/contact` (serverless)

## Requisitos
- Node 18+

## Como rodar
```bash
npm install
npm run dev
```
Acesse: http://localhost:5173

## Build de produção
```bash
npm run build
npm run preview
```

## Blogspot RSS
Para exibir os últimos artigos, crie um endpoint `/api/rss` (Netlify ou Vercel):  
- Configure a variável de ambiente `BLOGSPOT_RSS_URL`, ex:
  `https://SEU_BLOG.blogspot.com/feeds/posts/default?alt=rss`

### Netlify (Functions)
Arquivo: `netlify/functions/rss.js` (já incluso).  
No Netlify, defina `BLOGSPOT_RSS_URL` nas variáveis do projeto.

### Vercel (Serverless Functions)
Arquivo: `api/rss.js` (já incluso).  
Na Vercel, defina `BLOGSPOT_RSS_URL` em Project Settings → Environment Variables.

## Formulário de Contato
Endpoints: `/api/contact` para enviar e-mail via [Resend](https://resend.com) (ou adapte).  
Defina as variáveis de ambiente:
- `RESEND_API_KEY`
- `CONTACT_TO` (email destino, ex: contato@orion.com.br)
- `CONTACT_FROM` (email do remetente autorizado pela Resend, ex: noreply@seudominio.com.br)

### Netlify
Use `netlify/functions/contact.js` (incluso).

### Vercel
Use `api/contact.js` (incluso).

## Ajustes rápidos
- Atualize telefones, endereços e WhatsApp no `Header.jsx` e `Footer.jsx`.
- Troque os textos dos **cards** nas páginas.
- Altere cores no `src/styles/global.css` (variáveis CSS).

## FAQ
**Preciso do Next?** Não. Este projeto funciona 100% com React puro.  
**SEO vai funcionar?** Sim para título/descrição por rota. Para prévias ricas por URL em redes sociais, considere renderização estática no futuro ou migração para Next.  
**Sem servidor vou conseguir?** Sim para o site. Para RSS e e-mail, você precisa de **serverless** (Netlify/Vercel).

---

Feito para a Orion.
