import leia = require("readline-sync");
import Stack = require("../Stack");

const pilha = new Stack<string>();
let continua: boolean = true;
let continuar: string = "S";
let menu: number;

console.log(
  "****************************************************************************************************",
);
console.log(
  "                                            - Coleção de livros -                                   ",
);
console.log(
  "****************************************************************************************************",
);
console.log(
  "                                    1- Adicionar Livros na pilha                                    ",
);
console.log(
  "                                    2- Listagem de livros da pilha                                  ",
);
console.log(
  "                                    3- Retirar Livros da pilha                                      ",
);
console.log(
  "                                    0- Sair desta operação                                          ",
);
console.log(
  "****************************************************************************************************",
);
console.log(
  "                           Digite abaixo o qual operação deseja realizar. (0-3)                     ",
);
console.log(
  "****************************************************************************************************",
);

// pilha.push("Cronicas de gelo e fogo");
// pilha.push("Feiticeiro");
// pilha.push("O magico de oz");

while (continua) {
  if (continuar !== "S") {
    console.log("Operacao sendo finalizada");
    break;
  }
  menu = leia.questionInt(
    "Escolhe o numero da operacao que deseja realizar ( 0 para finalizar ) \n",
  );
  switch (menu) {
    case 1:
      pilha.push(
        leia.question(
          "Qual o titulo do livro que deseja adicionar a sua pilha : \n \n",
        ),
      );
      console.clear;
      console.log("Livro adicionado");
      continuar = leia
        .question(" \n Deseja continuar operacao? S/N \n")
        .toUpperCase();

      break;

    case 2:
      console.log(" \n Pilha de livros atual : \n");
      pilha.printStack();

      continuar = leia
        .question(" \n Deseja continuar operacao? S/N \n")
        .toUpperCase();
      break;
    case 3:
      pilha.pop();
      console.log(" \n Removido ultimo livro da pilha ! \n");
      console.log("\n Pilha de livros atualizada : \n ");
      pilha.printStack();
      continuar = leia
        .question(" \n Deseja continuar operacao? S/N \n")
        .toUpperCase();
      break;
    case 0:
      continua = false;
      break;
  }
}
