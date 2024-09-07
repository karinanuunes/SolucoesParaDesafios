// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
// pertence ou não a sequência.

const readline = require("readline-sync");

const numero = parseInt(
  readline.question("Digite um numero inteiro positivo: ")
);

if (isNaN(numero) || numero < 0) {
  console.log("Por favor, digite um número inteiro positivo.");
  return;
}

let listaNumeros = [0, 1];

let a = 0;
let b = 1;
let acc;

while (b < numero) {
  acc = a + b;
  a = b;
  b = acc;
  listaNumeros.push(b);
}

console.log(
  listaNumeros.includes(numero)
    ? `O número ${numero} pertence à sequência de Fibonacci.`
    : `O número ${numero} não pertence à sequência de Fibonacci.`
);

// Para verificar a sequência de Fibonacci gerada, descomente a linha abaixo.
// console.log("Sequência de Fibonacci gerada:", listaNumeros);

// Para testar o programa, digite um número inteiro positivo. O programa irá verificar se o número informado pertence à sequência de Fibonacci.
// Exemplo: 21 (pertence), 22 (não pertence).

// Como usar o terminal:
// 1) Digite 'node desafio01.js'
// 2) Digite um número inteiro positivo
