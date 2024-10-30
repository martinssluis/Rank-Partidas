# Desafio Rank de Partidas <img src="https://static.wikia.nocookie.net/fortnite/images/6/6c/Unreal_-_Icon_-_Fortnite.png/revision/latest?cb=20230531201239" width="50" style="vertical-align: middle;" />

Este projeto é uma simulação de um sistema de classificação para um jogador, onde o objetivo é calcular o saldo de vitórias e derrotas, determinando seu rank com base nas vitórias acumuladas. O projeto utiliza **JavaScript** para gerar partidas aleatórias, controlar a progressão do jogador, calcular o saldo e exibir o progresso de forma dinâmica no console.

## Tecnologias Utilizadas

### <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="20" height="20" /> - JavaScript

- **JavaScript**: A escolha por JavaScript se deu pela facilidade em manipular dados e pela flexibilidade. O projeto utiliza várias funcionalidades de JavaScript:
  - **Funções Matemáticas**: A função `Math.random()` é utilizada para determinar o resultado de cada partida, gerando vitórias ou derrotas aleatórias para o jogador.
  - **Laço de Repetição (`while`)**: O loop `while` simula uma série de partidas contínuas, onde o rank do jogador é atualizado até que ele atinja o nível máximo de "Imortal".
  - **Estruturas Condicionais (`switch` e `if...else`)**: A lógica de progressão e classificação do jogador é baseada em decisões que determinam o rank com base no saldo de vitórias acumuladas.
  - **Template Literals**: São usados para criar mensagens detalhadas sobre o saldo de vitórias, resultados das partidas e o rank atual, tornando a exibição de informações mais dinâmica.

---

## Funcionalidades ⚙️

- Gera partidas aleatórias para o jogador, contabilizando vitórias e derrotas.
- Calcula o saldo de vitórias e ajusta o rank do jogador conforme ele progride.
- Prevê que o saldo mínimo seja zero, impedindo o decremento do saldo abaixo desse valor.
- Determina o rank do jogador com base no saldo de vitórias acumuladas.
- Exibe um resumo detalhado após cada partida e informa quando o rank máximo é atingido.

---

## Regras de Classificação 

O sistema de classificação do jogador é baseado na quantidade total de vitórias acumuladas:

- Menos de 10 vitórias: **Ferro**
- Entre 11 e 20 vitórias: **Bronze**
- Entre 21 e 50 vitórias: **Prata**
- Entre 51 e 80 vitórias: **Ouro**
- Entre 81 e 90 vitórias: **Diamante**
- Entre 91 e 100 vitórias: **Lendário**
- 101 vitórias ou mais: **Imortal**

---

## Exemplo de Saída 

O sistema exibe uma mensagem a cada partida, indicando o saldo de vitórias, o resultado da partida e o rank atual do jogador, e finaliza com a mensagem de rank máximo atingido ao alcançar o nível **Imortal**.

```plaintext
==================== RESUMO DAS PARTIDAS ====================

Saldo de Vitórias: 55
====================//====================
Resultado: Vitória
====================//====================
Rank Atual: Ouro
====================//====================