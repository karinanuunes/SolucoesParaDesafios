// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// b) 2, 4, 8, 16, 32, 64, ____
// c) 0, 1, 4, 9, 16, 25, 36, ____
// d) 4, 16, 36, 64, ____
// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____

let letraA = [1, 3, 5, 7];
let letraB = [2, 4, 8, 16, 32, 64];
let letraC = [0, 1, 4, 9, 16, 25, 36];
let letraD = [4, 16, 36, 64];
let letraE = [1, 1, 2, 3, 5, 8];
let letraF = [2, 10, 12, 16, 17, 18, 19];

const descobrirProximoElemento = (array) => {
  if (array.length < 2) {
    console.log("Array muito pequeno para determinar o padrão.");
    return;
  }

  const ultimo = array[array.length - 1];

  const aritmetica = array.every(
    (num, i, arr) => arr[i] - arr[i - 1] === arr[1] - arr[0]
  );

  const geometrica = array.every(
    (num, i, arr) => arr[i] / arr[i - 1] === arr[1] / arr[0]
  );

  const quadrados = array.every((num, i) => Number.isInteger(Math.sqrt(num)));

  const fibonacci = (arr) => {
    if (arr.length < 3) return false;
    return arr[arr.length - 1] === arr[arr.length - 2] + arr[arr.length - 3];
  };

  if (aritmetica) {
    const diferenca = array[1] - array[0];
    const proximo = ultimo + diferenca;
    console.log("Progressão Aritmética:", [...array, proximo]);

    return;
  } else if (geometrica) {
    const razao = array[1] / array[0];
    const proximo = ultimo * razao;
    console.log("Progressão Geométrica:", [...array, proximo]);

    return;
  } else if (quadrados) {
    const proximoIndice = Math.sqrt(ultimo) + 1;
    const proximo = proximoIndice * proximoIndice;
    console.log("Sequência de Quadrados Perfeitos:", [...array, proximo]);

    return;
  } else if (fibonacci(array)) {
    const proximo = array[array.length - 1] + array[array.length - 2];
    console.log("Sequência de Fibonacci:", [...array, proximo]);

    return;
  } else {
    console.log("Padrão não reconhecido.");
    return;
  }
};

descobrirProximoElemento(letraA);
descobrirProximoElemento(letraB);
descobrirProximoElemento(letraC);
descobrirProximoElemento(letraD);
descobrirProximoElemento(letraE);
descobrirProximoElemento(letraF);

// Respostas esperadas:
// a) 9
// b) 128
// c) 49
// d) 81
// e) 13
// f) Padrão não reconhecido.

// Como usar o terminal:
// 1) Digite 'node desafio04.js' para ver o próximo elemento de cada sequência.
