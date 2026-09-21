# Energia 5-3-1

Power-Up gratuito do Trello. Classifica o card em Baixa, Média ou Alta.

Repo: https://github.com/AndersonAdelino/energia-531

Custo = (2 × esforço) + tempo + (2 × (6 − vontade))

- 5 a 11 → Baixa (até 5 no dia)
- 12 a 17 → Média (até 3 no dia)
- 18 a 25 → Alta (1 no dia)

Travas: vontade 1 + esforço 4 ou 5 = Alta. Tempo 5 nunca fica Baixa. Vontade 5 + esforço 1 ou 2 = Baixa.

## Publicar

### Opção A — GitHub Pages

1. Abra https://github.com/AndersonAdelino/energia-531/settings/pages
2. Source: Deploy from a branch
3. Branch `main` / pasta `/ (root)`
4. Save
5. URL do conector:

`https://andersonadelino.github.io/energia-531/`

### Opção B — Cloudflare Pages

1. dash.cloudflare.com → Workers & Pages → Create → Connect to Git
2. Repo `energia-531`
3. Build command vazio. Output directory vazio.
4. URL algo como `https://energia-531.pages.dev/`

## Ligar no Trello

1. https://trello.com/power-ups/admin → New
2. Nome: `Energia 5-3-1`
3. Iframe connector URL: a URL HTTPS acima (com barra no final)
4. Capabilities: Card buttons, Card badges, Card detail badges, Card back section
5. No quadro: Power-Ups → Custom → Add

Ícone: `https://andersonadelino.github.io/energia-531/icons/bolt.svg`
