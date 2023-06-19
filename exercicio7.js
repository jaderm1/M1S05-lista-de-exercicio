/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e splice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function add(array,elemento){

    array.push(elemento);
    return array;

}

function removeLast(array){

    
    return array.pop();

}

function removeFromInterval (array, init , end){

    array.splice(init,end);
    return array;

}



console.log(add(array,10));

console.log(removeLast(array));

console.log(removeFromInterval(array,2,4));