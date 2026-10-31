# CA Instalação de Fechadura — versão para Vercel

Esta pasta é um projeto Next.js pronto para publicação na Vercel. O site é estático: não precisa de painel administrativo, banco de dados, API ou serviço de upload. A logo, seis fotos e três vídeos estão em `public/media`.

## Publicar

1. Envie **o conteúdo desta pasta** para um repositório Git e importe-o em **Vercel → Add New → Project**. Se o repositório contiver a pasta `ca-vercel` junto com outros arquivos, escolha `ca-vercel` em **Root Directory**.
2. Confirme **Framework Preset: Next.js**. Deixe os comandos de instalação, build e saída na detecção automática. O projeto fixa pnpm 10 no `package.json`; `next build` gera a exportação estática em `out/`.
3. Depois de definir o domínio final, configure `NEXT_PUBLIC_SITE_URL` com a URL completa, por exemplo `https://seu-dominio.com.br`, e faça um novo deploy. Isso atualiza URLs canônicas, sitemap, robots e dados estruturados. Se as variáveis de sistema da Vercel estiverem expostas, o site usa `VERCEL_PROJECT_PRODUCTION_URL` automaticamente enquanto essa variável não estiver definida.

Não configure banco de dados nem variáveis de administração. O formulário em `/contato` apenas monta uma mensagem para o WhatsApp da empresa.

## Testar localmente

```sh
pnpm install
pnpm build
pnpm dev
```

O build foi verificado com Next.js 16.3.4 e gera todas as páginas, `robots.txt`, `sitemap.xml` e os arquivos de mídia. Para atualizar conteúdo, altere os arquivos em `app/`, `components/` ou `public/media` e publique novamente.
