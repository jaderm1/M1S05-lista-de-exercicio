/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */


let age = 60

if (age <=12) {
    console.log("criança");
    
}else if (age <=17){
    console.log("adolescente");
}
else if (age <=59){
    console.log("adulto");
}

else {
    console.log("idoso");
}