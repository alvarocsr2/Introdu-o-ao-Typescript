import leia = require("readline-sync")

const numeros: Array<number> = new Array<number>();

numeros.push(5);
numeros.push(1,2,3,4,5);


numeros.push(leia.questionInt("Adicione um valor "));
console.table(numeros)

for (let numero of numeros){
    console.log(numero)
}


console.log("O numero 5 existe ? ", numeros.includes(5));
console.log("O indice do numero 7: ", numeros.indexOf(7));

// Deletar elemento
numeros.splice(numeros.indexOf(7),1);
console.table(numeros);
