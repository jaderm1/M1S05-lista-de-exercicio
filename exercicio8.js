/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */


function calculator(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2;
    }
    else if (operation === "-") {
        return num1 - num2;
    }
    else if (operation === "*") {
        return num1 * num2;
    }
    if (operation === "/") {
        return num1 / num2;
    }

}







console.log(calculator(2, 3, "+"))


console.log(calculator(12, 10, "-"));


console.log(calculator(5, 9, "*"));


console.log(calculator(110, 50, "/"));
