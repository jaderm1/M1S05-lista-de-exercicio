/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */


let products = [

    { 'name': 'Coca-Cola', 'preço': 5.00 }, 
    { 'name': 'Pepsi', 'preço': 4.50 },
    { 'name': 'Fanta', 'preço': 4.00 },
    { 'name': 'Guaraná', 'preço': 3.50 }]

    let priceAllProducts = 0;

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + ' R$ ' + products[i].preço);
priceAllProducts = priceAllProducts + products[i].preço;
}
console.log(`O total de produtos disponivel é ${products.length}`);
console.log(`O valor total de todos os produtos é ${priceAllProducts}`);




