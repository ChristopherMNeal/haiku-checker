export { haikuChecker };

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
  const syllableSum = syllable.reduce(function(currentValue, element) {
    return element + currentValue;
  }, 0);
  return syllableSum;
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

  // trying to remove word final "e"s
  // if (word[word.length - 1] === "e") {
  //   const wordNoE = word.slice(0, word.length - 1);
  // } else {
  //   const wordNoE = word;
  // }
  
  // this successfully counts vowels in each word
  // const letterArray = wordNoE.toLowerCase().split("");
  // const vowelArray = letterArray.filter(e => e.match(/[aeiou]/g));
  // return vowelArray.length;
};


