# CHAPA — código organizado para análise

Código atualizado a partir da versão 5, com formatação legível e seções comentadas no JavaScript. A barra mobile agora tem a logo Chapa no card central e a sacola como botão normal.

## Como abrir

Extraia o ZIP e abra `index.html` no navegador. Mantenha `styles.css`, `script.js` e a pasta `assets` ao lado dele. As fontes do Google precisam de internet; existem fontes alternativas no CSS.

## Onde editar

- `index.html`: estrutura, cabeçalho, destaques, categorias, sacola e navegação mobile.
- `styles.css`: cores, componentes, animações e regras de responsividade.
- `script.js`: produtos e preços no início; renderização, busca, sacola, transições e eventos nas seções seguintes.
- `assets/`: imagens usadas pelo site.
- `THIRD_PARTY_NOTICES.txt`: créditos existentes.

## O que a versão atual já contém

- 4 hambúrgueres, 6 porções, 8 bebidas e 4 combos.
- Menu hambúrguer abaixo de 768 px e navegação desktop a partir dessa largura.
- Busca, sacola com armazenamento local, alternância de tema e revisão demonstrativa do pedido.
- Animações de apresentação sempre ativas, sem adaptação automática à preferência de redução de movimento.

## Animações de apresentação

As transições das categorias e abertura da sacola duram 650 ms. O cardápio entra com deslocamento de 24 px e sai com deslocamento de 16 px. O menu mobile abre em 650 ms e fecha em 400 ms. As regras de `prefers-reduced-motion` foram removidas por solicitação para a apresentação. O site não desliga mais os efeitos com base nessa preferência.

A execução ainda depende do suporte e desempenho do navegador e aparelho. Não houve teste visual em todos os navegadores.

## Verificação

JavaScript validado sintaticamente, cinco atalhos da barra mobile e referências locais verificados. Sem teste visual nesta retomada. O site continua sendo uma demonstração: não envia pedidos nem recebe pagamentos.

## Imagens do cardápio

As 6 porções e 8 bebidas usam fotos ilustrativas geradas por IA com a ferramenta integrada de geração de imagens. Os arquivos WebP ficam em `assets/products/`, nomeados pelo identificador de cada produto. Todos usam fundo bege, luz suave de estúdio e enquadramento central; a descrição de cada produto orientou a geração.

## Busca e botões de adicionar

A animação da sacola nos cards ocorre apenas no clique. A busca anima o foco da lupa e a troca dos resultados em 450 ms após uma pausa de 160 ms na digitação. Se os resultados forem iguais, a animação não reinicia. Trocar de categoria cancela qualquer busca pendente.

## Categorias, pesquisa dedicada e combos

As categorias usam botões acessíveis com estado pressionado, preservam a posição de rolagem e mantêm o contêiner em fluxo durante a troca dos cards. A pesquisa abre uma área própria abaixo do campo, oculta o banner e busca também combos. Limpar o campo, pressionar Escape ou selecionar Voltar ao cardápio restaura as seções.

Novos combos demonstrativos: Clássico (R$ 42), Duplo (R$ 49), Bacon (R$ 57), além do Combo pra Dois (R$ 79). As fotos dos combos são ilustrativas.

Verificações: sintaxe JavaScript, produtos com identificadores únicos, resultados de busca por combo, ausência de resultados e retorno ao cardápio. Sem verificação visual no navegador.
