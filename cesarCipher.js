import { frequencyAnalysis } from "./frequencyAnalysis.js";

const CHARACTERS_MOVE = 3;

function getMovedChar(char = "", positionsToMove) {
  let newCharCode = char.charCodeAt(0) + positionsToMove;

  if (newCharCode > "z".charCodeAt(0)) {
    const charactersMove = Math.abs(
      "z".charCodeAt(0) - char.charCodeAt(0) + 1 - positionsToMove
    );

    return "a".charCodeAt(0) + charactersMove;
  }

  return newCharCode;
}

function cesarCipher(input) {
  const cipherChars = [...input.toLowerCase()];

  const cipheredString = cipherChars.map((char) => {
    const newChar = String.fromCharCode(getMovedChar(char, CHARACTERS_MOVE));

    return newChar;
  });

  return cipheredString.join().replace(/,/g, "");
}

const text =
  "Em criptografia, a Cifra de César, também conhecida como cifra de troca, código de César ou troca de César, é uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes";

const res = cesarCipher(text.replace(/ /g, ""));

console.log(res);
frequencyAnalysis(res);
