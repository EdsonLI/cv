# Edson Luís Isele — Currículo digital

Currículo profissional responsivo publicado como site estático no GitHub Pages.

## Estrutura

- `index.html`: conteúdo e semântica do currículo
- `assets/css/styles.css`: design system, responsividade e estilos de impressão
- `assets/js/main.js`: scripts auxiliares da página, quando aplicáveis
- `assets/img`: recursos visuais
- `.nojekyll`: publicação estática sem processamento Jekyll

## Publicação

O site publicado em **https://edsonli.github.io/cv/** usa publicação direta por branch no GitHub Pages.

Configuração utilizada no histórico do projeto:

- Source: **Deploy from a branch**
- Branch de publicação: **main**
- Folder: **/(root)**

Não há workflow de GitHub Actions necessário para publicar o currículo. Alterações validadas em `dev` são sincronizadas para `main`, e o GitHub Pages publica diretamente o conteúdo da raiz.

A branch `gh-pages` é apenas um legado histórico e não é necessária para o fluxo atual. Quando mantida, deve permanecer sincronizada para não conter uma versão antiga do currículo.

## PDF

A versão em PDF pode ser obtida pelo botão **Imprimir / Salvar PDF** do próprio currículo, usando os estilos de impressão definidos no CSS.
