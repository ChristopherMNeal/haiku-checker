import {
  haikuChecker,
  wordSplitter,
  lineSyllables,
  syllableChecker,
} from "../src/js/haiku.js";

// input examples:
// ["the coffee is made", "the toast is in the toaster", "it is breakfast time"]
// [["the", "coffee", "is", "made"], ["the", "toast", "is", "in", "the", "toaster"], ["it", "is", "breakfast", "time"]]

describe("wordSplitter", () => {
  test("should correctly split line into own array", () => {
    expect(wordSplitter(["the coffee is made"])).toStrictEqual([
      ["the", "coffee", "is", "made"],
    ]);
  });

  test("should trim extra spaces", () => {
    expect(wordSplitter(["the coffee is made  "])).toStrictEqual([
      ["the", "coffee", "is", "made"],
    ]);
  });
});

describe("haikuChecker", () => {
  test("should identiy the number of syllabes", () => {
    expect(haikuChecker(["the coffee is made", "yeah!"])).toStrictEqual("5, 1");
  });
});

describe("lineSyllables", () => {
  test("should add the number of syllables of each line", () => {
    expect(lineSyllables(["the coffee is made"])).toStrictEqual(5);
  });
});

describe("syllableChecker", () => {
  test("should identify the number of syllables in a single word", () => {
    expect(syllableChecker("the")).toStrictEqual(1);
  });

  test("should identify the number of syllables in a single word with an 'e' at the end", () => {
    expect(syllableChecker("made")).toStrictEqual(1);
  });

  test("should identify the number of syllables in a single word with 'ea' in the word", () => {
    expect(syllableChecker("neat")).toStrictEqual(1);
  });

  test("should identify the number of syllables in a single word", () => {
    expect(syllableChecker("any")).toStrictEqual(2);
  });
});
