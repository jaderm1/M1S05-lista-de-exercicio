/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let conter = 8;

let number1 = 0;

let number2 = 1;

while (conter > 0) {
    console.log(number1);
    number1 = number1 + number2;
    number2 = number1 - number2;
    conter--;
}