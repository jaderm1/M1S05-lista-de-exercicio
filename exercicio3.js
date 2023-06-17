/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */


let numero = 61; //NUMERO A SER VERIFICADO

let contador = 2; //CONTADOR DE DIVISÕES

do {
    if (numero === 1) {
        console.log(`O número 1 é primo`)
        break;
    }
    else if (numero === 2) {
        console.log(`O numero 2 é primo`)
        break;

    }
    if (numero % contador === 0) {
        console.log(`O número ${numero} não é primo`);
        break;
    }

    else {
        contador++;
    }

}
while (contador < numero);

if (contador === numero) { console.log(`O número ${numero} é primo`) };

