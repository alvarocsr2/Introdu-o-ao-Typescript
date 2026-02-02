import leia = require ("readline-sync")
import Queue = require("./Queue");


const fila = new Queue<string>();       

fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");
fila.enqueue(leia.question(" Digite um nome "))

fila.printQueue();
console.log("\n");
fila.dequeue();

fila.printQueue();



let busca = "Erick" ;
busca.toLowerCase;

console.log("Tamanho da fila : ", fila.count());

// console.log("O Erick está na fila ? ", fila.contains("Erick"));
console.log("O Erick está na fila ? ", fila.contains(busca));