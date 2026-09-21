# Energia 5-3-1

Power-Up gratuito do Trello para o método **5-3-1**:

- 1 tarefa de energia **Alta**
- 3 de energia **Média**
- 5 de energia **Baixa**

No card você calcula o nível ou define na mão. A badge aparece na frente do card.

Não precisa de plano pago. Não usa campo nativo do Trello.

Conector no ar: [andersonadelino.github.io/energia-531](https://andersonadelino.github.io/energia-531/)

## O que aparece no Trello

- Botão **Energia 5-3-1** no card
- Popup com sliders e colinha das notas
- Atalho manual: Baixa / Média / Alta
- Badge colorida na frente do card
- Bloco no verso com o resultado

O Power-Up não cria etiqueta nativa e não ordena a coluna. O Trello grátis não lê esse dado no Sort by.

## Como usar

1. Abra o card.
2. Energia 5-3-1 → Calcular.
3. Arraste os 3 sliders e clique **Salvar cálculo**.
4. Ou clique **Baixa / Média / Alta** e ignore a conta.
5. A badge grava no card.

**Limpar** apaga a nota daquele card.

## Fórmula

Cada critério vai de 1 a 5.

```
resistência = 6 − vontade
custo      = (2 × esforço) + tempo + (2 × resistência)
```

| Custo | Nível | Cota no dia |
| --- | --- | --- |
| 5 a 11 | Baixa | até 5 |
| 12 a 17 | Média | até 3 |
| 18 a 25 | Alta | 1 |

Travas:

- vontade 1 e esforço 4 ou 5 → sempre Alta
- tempo 5 → nunca Baixa
- vontade 5 e esforço 1 ou 2 → Baixa

Definir na mão ignora a conta até você salvar um cálculo de novo.

## Escala

**Vontade**

1. rejeito, adio sempre
2. só obrigação
3. neutro
4. quero fazer
5. puxa sozinho

**Tempo** (bloco contínuo, sem pausa)

1. até 10 min
2. 10–25 min
3. 25–45 min
4. 45–90 min
5. mais de 90 min — quebre a tarefa

**Esforço mental**

1. automático
2. atenção leve
3. caminho conhecido
4. criar, decidir, resolver
5. deep work, começar do zero

## Instalar no Trello

O app já existe na área de trabalho Zenithon LTDA. Em outro workspace, crie de novo:

1. [trello.com/power-ups/admin](https://trello.com/power-ups/admin) → New
2. Marque que o app usa recursos de Power-Up
3. Nome: `Energia 5-3-1`
4. Iframe connector URL:

   `https://andersonadelino.github.io/energia-531/`

5. OAuth pode ficar em branco. Este app não usa login.
6. Em Capabilities, ligue só:
   - Card buttons
   - Card badges
   - Card detail badges
   - Card back section
7. No quadro: Power-Ups → Custom → Energia 5-3-1 → Add

Ícone opcional: `https://andersonadelino.github.io/energia-531/icons/bolt.svg`

## Publicar uma alteração

O site sai da branch `main` pelo GitHub Pages.

1. Edite os arquivos.
2. Dê push em `main`.
3. Espere cerca de um minuto.
4. No Trello, refresh forte (`Ctrl+Shift+R`).

Páginas: [settings/pages](https://github.com/AndersonAdelino/energia-531/settings/pages)

Source: Deploy from a branch → `main` → `/ (root)`

Cloudflare Pages também serve. Build vazio. Output vazio. Não use `X-Frame-Options: DENY`. O Trello carrega o conector em iframe.

## Arquivos

| Arquivo | Função |
| --- | --- |
| `index.html` | conector (URL do admin) |
| `calc.html` | popup |
| `section.html` | bloco no verso do card |
| `js/formula.js` | conta, travas, modo manual |
| `js/client.js` | botões e badges |
| `js/calc.js` | sliders e gravação |
| `style.css` | visual |

Para mudar o corte 11 / 17, edite só `js/formula.js`.
