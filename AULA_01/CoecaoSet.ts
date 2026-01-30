import leia = require("readline-sync")

const cores: Set<string> = new Set<string>();

cores.add("Azul");
cores.add("preto");
cores.add("Azul");
cores.add("verde");
cores.add("vermelho");


console.table(cores)


console.log("A cor Verde existe ? ", cores.has("Verde"));

//Deletar elemento
cores.delete("Azul");

console.table(cores);
for(let cor of cores){
    console.log(cor);
}

// for (let numero of numeros){
//     console.log(numero)
// }


// console.log("O numero 5 existe ? ", numeros.includes(5));
// console.log("O indice do numero 7: ", numeros.indexOf(7));

// // Deletar elemento
// numeros.splice(numeros.indexOf(7),1);
// console.table(numeros);
