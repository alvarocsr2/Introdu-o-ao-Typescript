import Queue = require("../Queue");
import leia = require("readline-sync");

let continua: string = "S";

const fila = new Queue<string>();

fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");

console.log(
  "****************************************************************************************************",
);
console.log(
  "                                            Menu interativo - Banco GenPay                          ",
);
console.log(
  "****************************************************************************************************",
);
console.log(
  "                                    1- Adicionar Clientes na fila                                   ",
);
console.log(
  "                                    2- Listagem de clientes da fila                                 ",
);
console.log(
  "                                    3- Retirar Cliente da fila                                      ",
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


while (continua === "S") {
  const operacao = leia.questionInt(
    "Olá seja bem vindo ao banco GenPay, qual operação deseja realizar ? Escolha de 0 a 3. ",
  );

  if (operacao === 0) {
    console.log(
      " Voce selecionou ( 0 )| Finalizando operação. Obrigado por acessar o Banco GenPay ltda.",
    );
    continua = leia.keyIn("Digite");
    continua = leia
      .question("Deja realizar outra operacao ? S/N: ")
      .toUpperCase();
  }
  if (operacao == 1) {
    fila.enqueue(
      leia.question(
        " Voce selecionou (1)| Adicionar cliente para a fila | Qual o nome do cliente que gostaria de adicionar a fila ?",
      ),
    );
    fila.printQueue();

    continua = leia
      .question("Deja realizar outra operacao ? S/N: ")
      .toUpperCase();
  }
  if (operacao == 2) {
    console.log(
      "Voce selecionou (2) | Exibindo a lista de pessoas na fila atual.",
    );
    fila.printQueue();
    continua = leia
      .question("Deja realizar outra operacao ? S/N: ")
      .toUpperCase();
  }
  if (operacao == 3) {
    console.log(
      "\n Voce selecionou ( 3 ) Retirar cliente da fila | *Removendo cliente*  ",
      "Fila anterior : \n",
    );

    fila.printQueue();
    fila.dequeue();

    console.log("Fila atualizada: \n");
    fila.printQueue();

    continua = leia
      .question("Deja realizar outra operacao ? S/N: ")
      .toUpperCase();
    if (continua === "N") {
      break;
    }
  }
}
if (continua !== "N" && continua !== "S") {
  console.log("INVALIDO! Digite S/N ");
}
