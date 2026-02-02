// import leia = require ("readline-sync")
import Stack = require("./Stack");


const pilha = new Stack<string>();       

pilha.push("Renan");
pilha.push("Vivian");
pilha.push("Erick");
// pilha.push(leia.question(" Digite um nome "))

pilha.printStack();
console.log("\n");
pilha.pop();

pilha.printStack();



let busca = "Erick" ;
busca.toLowerCase;

console.log("Tamanho da pilha : ", pilha.count());

// console.log("O Erick está na pilha ? ", pilha.contains("Erick"));
console.log("O Erick está na pilha ? ", pilha.contains(busca));