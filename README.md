# Edson Luís Isele — Currículo digital

Currículo profissional responsivo publicado como site estático no GitHub Pages.

## Estrutura

- `index.html`: conteúdo e semântica da página
- `assets/css/styles.css`: design system, responsividade e estilos de impressão
- `assets/js/main.js`: navegação, tema, animações e progresso de leitura
- `assets/img`: favicon e imagem alternativa do perfil
- `.github/workflows/deploy-pages.yml`: build e publicação automática no GitHub Pages

## Publicação automática

Todo push na branch `main` dispara o GitHub Actions. O workflow prepara o site, gera automaticamente a versão PDF em `assets/files/Curriculo_Edson_Luis_Isele.pdf` e publica o resultado em `https://edsonli.github.io/cv/`.

Também é possível executar o workflow manualmente pela aba **Actions** do repositório.
