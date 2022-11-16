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

export function cesarCipher(input) {
  const cipherChars = [...input.toLowerCase()];

  const cipheredString = cipherChars.map((char) => {
    const newChar = String.fromCharCode(getMovedChar(char, CHARACTERS_MOVE));

    return newChar;
  });

  return cipheredString.join().replace(/,/g, "");
}
