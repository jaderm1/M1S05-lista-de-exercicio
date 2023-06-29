/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
    */


let words = ['casa', 'carro','arvores','bicicleta','moto','caminhão','ônibus'];

for (let word of words){

    if (word.length >5){
console.log(word);

    }
}