import question = require("readline-sync");
import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();
let coresOrd  = new Array<string>();

for (let i = 0; i < 5; i++) {
  cores.push(leia.question(" Escolha uma cor de cada vez "));
}

coresOrd = cores.toSorted()
console.table(` Aqui está sua listagem de cores adicionadas : ${cores}`);

console.table(` Aqui está sua listagem de cores ordenadas : ${coresOrd}`);
