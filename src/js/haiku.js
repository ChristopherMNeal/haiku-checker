export { haikuChecker, lineChecker };
// const text = "the coffee is made \n the toast is in the toaster \n it is breakfast time"

// returns an array of lines
const lineSplitter = (text) => {
  return text.trim().split("\n");
};

// splits an array of lines into a nested array with individual words
const wordSplitter = (line) => {
  return line.map((line) => line.trim().split(" "));
};

// returns array with syllable count of first three lines
const haikuChecker = (text) => {
  const lines = lineSplitter(text);
  const linesWords = wordSplitter(lines);
  const syllableCountArray = linesWords.map((lines) => lineSyllables(lines));
  return syllableCountArray.join(", ");
};

// adds the syllables of each line
const lineSyllables = (wordsArray) => {
  const syllable = wordsArray.map((word) => syllableChecker(word));
  const syllableSum = syllable.reduce(function(currentValue, element) {
    return element + currentValue;
  }, 0);
  return syllableSum;
};

// counts the number of lines
const lineChecker = (text) => {
  const lines = lineSplitter(text);
  const linesLength = lines.length; 
  return linesLength;
};

// counts the syllables of each word
const syllableChecker = (word) => {
  // code borrowed from StackOverflow
  word = word.toLowerCase();
  if(word.length <= 3) { return 1; }
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  return word.match(/[aeiouy]{1,2}/g).length;

  // our code that only counts vowels right now
  // const letterArray = word.toLowerCase().split("");
  // const vowelArray = letterArray.filter(e => e.match(/[aeiou]/g));
  // return vowelArray.length;
};


// //setup function
// function findPrimes(input) {
//   const array = Array.from({length: (input - 1)}, (_, i) => 2 + i);
//   const primes = recurse(array);
//   return `prime numbers less than ${input} are ${primes}`;
// }

// //recursive function
// function recurse(array, index = 0) {
//   if (index === array.length -1) {
//     return array;
//   }
//   else {
//     const filtered = array.filter(e => e % array[index] > 0 || e === array[index]);
//     return recurse(filtered, index+1);
//   }
// }


// const vowelCounter = (array, i, vowelCount) => {
//   const vowelArray = ["a", "e", "i", "o", "u"];
//   if (i >= array.length) {
//     return vowelCount;
//   } else if (vowelArray.includes(array[i])) {
//     console.log(array[i]);
//     return vowelCounter(array, i+1, vowelCount + 1)
//     // return [array[i]].push(vowelCounter(array, i + 1));
//   } else {
//     return vowelCounter(array, i + 1, vowelCount);
//   }
// }

// vowelCounter(['c', 'h', 'i', 'n'], 0, 0)

// function new_count(word) {
//   word = word.toLowerCase();
//   if(word.length <= 3) { return 1; }
//   word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
//   word = word.replace(/^y/, '');
//   return word.match(/[aeiouy]{1,2}/g).length;
// }

/*
The "Written Method" Rules
Count the number of vowels (A, E, I, O, U) in the word.
Add 1 every time the letter 'y' makes the sound of a vowel (A, E, I, O, U).
Subtract 1 for each silent vowel (like the silent 'e' at the end of a word).
Subtract 1 for each diphthong or triphthong in the word.
  Diphthong: when 2 vowels make only 1 sound (au, oy, oo)
  Triphthong: when 3 vowels make only 1 sound (iou)
Does the word end with "le" or "les?" Add 1 only if the letter before the "le" is a consonant.
The number you get is the number of syllables in your word.
*/