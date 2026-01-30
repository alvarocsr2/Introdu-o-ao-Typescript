import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
  numeros.add(leia.questionInt(" Digite um numero: "));
}
console.log("Listar dados do Set");
numeros.forEach((valor) => console.log(valor));
