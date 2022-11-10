export function frequencyAnalysis(input = "") {
  let letterFrequency = {};

  const parsedInput = [...input];

  parsedInput.forEach((letter) => {
    const letterOcurrencys = letterFrequency[letter] + 1 || 1;

    letterFrequency = {
      ...letterFrequency,
      [letter]: letterOcurrencys,
    };
  });

  printFrequencyTable(letterFrequency, parsedInput.length);
}

export function printFrequencyTable(data = {}, numberOfLetters) {
  const dataParsed = Object.keys(data).map((key) => {
    return {
      letter: key,
      ocurrencys: data[key],
      frequency: `${((data[key] / numberOfLetters) * 100).toFixed(2)}%`,
    };
  });

  dataParsed.sort((a, b) => {
    return b.ocurrencys - a.ocurrencys;
  });

  console.table(dataParsed);
}
