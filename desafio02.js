// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

const readline = require("readline-sync");

const palavra = readline.question("Digite uma palavra: ");

let contador = 0;

for (let i = 0; i < palavra.length; i++) {
  if (palavra[i] === "a" || palavra[i] === "A") {
    contador++;
  }
}

if (palavra.includes("a") || palavra.includes("A")) {
  console.log(`A letra 'a' aparece ${contador} vezes na palavra.`);
} else {
  console.log("A letra 'a' não aparece na palavra.");
}

// Para testar o programa, digite uma palavra.
// Exemplo: Karina (aparece 2 vezes), ônibus (não aparece).

// Como usar o terminal:
// 1) Digite 'node desafio02.js'
// 2) Digite uma palavra
