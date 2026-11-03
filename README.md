# CA Fechaduras Digitais — versão para Vercel

Site Next.js com exportação estática para a CA Fechaduras Digitais. O domínio canônico é `https://www.cainstalacaodefechaduras.com.br`, conforme as URLs já publicadas no sitemap. O formulário de contato prepara uma mensagem para o WhatsApp; o site não armazena as respostas.

## Desenvolvimento

Requer Node.js 22.13 ou superior e pnpm 10.

```sh
pnpm install
pnpm build
```

O build gera o site em `out/`, incluindo `robots.txt`, `sitemap.xml` e uma página 404. Para publicar na Vercel, importe este diretório como projeto Next.js e associe o domínio canônico. Configure um redirecionamento permanente 301 de `cainstalacaodefechaduras.com.br` para a versão com `www` no painel de domínios.

## Conteúdo e SEO local

O conteúdo público declara atendimento em Blumenau, SC, com Badenfurt como bairro de referência. Outros municípios, endereço completo, horários, preços e perfil oficial do Google só devem ser adicionados após confirmação da empresa.

O sitemap inclui as sete páginas públicas. Após o deploy:

1. Abra `https://www.cainstalacaodefechaduras.com.br/robots.txt` e `https://www.cainstalacaodefechaduras.com.br/sitemap.xml` e confirme resposta HTTP 200.
2. No Google Search Console, confira a propriedade do domínio e o sitemap `https://www.cainstalacaodefechaduras.com.br/sitemap.xml`. Se ele já estiver cadastrado, não é necessário cadastrá-lo de novo.
3. Confira a cobertura e a inspeção das URLs principais no Search Console. A verificação do Google já está no layout e o arquivo de verificação existente foi preservado.
4. Confirme nome, telefone, área de atendimento e URL do site no Perfil da Empresa no Google antes de publicar um link para ele.

Os arquivos WebP são usados nas páginas. Os JPEG originais permanecem como referência e a imagem de compartilhamento usa uma dessas fotos. Os vídeos da galeria usam `preload="none"`; o vídeo principal mantém reprodução automática com poster.
