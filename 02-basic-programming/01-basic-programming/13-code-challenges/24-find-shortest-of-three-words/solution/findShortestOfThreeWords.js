function findShortestOfThreeWords(word1, word2, word3) {
  var strShort = word1;

  if (strShort.length > word2.length)
    strShort = word2;

  if (strShort.length > word3.length)
    strShort = word3;
  return strShort;
};

module.exports = findShortestOfThreeWords;
