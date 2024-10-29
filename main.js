/* Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

//Variáveis
let vitorias 
let derrotas
let contador = 0 // quando vitorias > derrotas contador ++ (vai ser usado para os ranks)
let rank 
let resultado // para exibir se foi vitória ou derrota

/*
Lógica:
    - uma função que gera um resultado aleatório de vitória ou derrota
    - gerar enquanto rank = imortal
    - contabilizar a quantidade de vitórias para ir aumentando o rank
    - se acontece uma derrota, menos um contador de vitoria
    - contador incrementa a cada vitoria mas também decrementa a cada derrota
    - verdadeiro = vitoria/ false = derrota
    - previnir que o contador não fique negativo, que o limite seja 0 
*/

while(rank != "Imortal"){ // enquanto o rank for diferente de Imortal ele vai gerar verdadeiro ou falso 
//Função booleano aleatório
    function booleanoAleatorio(){
        return Math.random() >= 0.5
    }
    resultado = booleanoAleatorio();

    if (resultado) {
        resultado = "Vitória";
        contador += 1;
    } else {
        resultado = "Derrota";
        // Verificação para garantir que o contador não fique negativo
        if (contador > 0) {
            contador -= 1;
        }
    }

    // Atualiza o rank com base no contador
    switch (true) {
        case (contador < 10):
            rank = "Ferro";
            break;
        case (contador >= 11 && contador < 21):
            rank = "Bronze";
            break;
        case (contador >= 21 && contador < 51):
            rank = "Prata";
            break;
        case (contador >= 51 && contador < 81):
            rank = "Ouro";
            break;
        case (contador >= 81 && contador < 91):
            rank = "Diamante";
            break;
        case (contador >= 91 && contador < 100):
            rank = "Lendário";
            break;
        case (contador >= 101):
            rank = "Imortal";
            break;
    }

    // Saída
const mensagem = `
==================== RESUMO DAS PARTIDAS ====================

Saldo de Vitórias: ${contador}
 ====================//====================
Resultado: ${resultado} 
====================//====================
  Rank Atual: ${rank}
====================//====================
`
console.log(mensagem)
}
if (rank = "Imortal"){
    console.log(`
        ==================== RANK MÁXIMO ATINGIDO ====================
        `)
}