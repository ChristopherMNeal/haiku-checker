export { haikuChecker, wordSplitter, lineSyllables, syllableChecker };

// splits an array of lines into a nested array with individual words
const wordSplitter = (line) => {
  return line.map((line) => line.trim().split(" "));
};

// returns array with syllable count of first three lines
const haikuChecker = (lines) => {
  const linesWords = wordSplitter(lines);
  const syllableCountArray = linesWords.map((lines) => lineSyllables(lines));
  return syllableCountArray.join(", ");
};

// adds the syllables of each line
const lineSyllables = (wordsArray) => {
  const syllable = wordsArray.map((word) => syllableChecker(word));
  const syllableSum = syllable.reduce(function (currentValue, element) {
    return element + currentValue;
  }, 0);
  return syllableSum;
};

// counts the syllables of each word
const syllableChecker = (word) => {
  // code borrowed from StackOverflow
  // word = word.toLowerCase();
  // if (word.length <= 3) {
  //   return 1;
  // }
  // word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  // word = word.replace(/^y/, "");
  // return word.match(/[aeiouy]{1,2}/g).length;

  // our code that only counts vowels right now

  // trying to remove word final "e"s

  // this successfully counts vowels in each word
  const wordNoE = removeE(word);
  const wordNoThreeVowels = wordNoE.replace(/[aeiou]{3}/g, "e");
  const wordNoTwoVowels = wordNoThreeVowels.replace(/[aeiou]{2}/g, "e");
  const letterArray = wordNoTwoVowels.toLowerCase().split("");
  const vowelArray = letterArray.filter((e) => e.match(/[aeiou]/g));
  return vowelArray.length;
};

// BUG: removes the final "e" from "able" but it shouldn't
const removeE = (word) => {
  if (
    word.length > 3 ||
    (word.match(/(?:le)\b/g) &&
      ["a", "e", "i", "o", "u"].includes(word[word.length - 3]))
  ) {
    return word.replace(/[e]\b/, "");
  } else {
    return word;
  }
};

// /[b-df-hj-np-tv-z][^l][^e]$/

// /[le]\b/
// /[les]\b/

// able
// kal

// /(?:le)\b/g
