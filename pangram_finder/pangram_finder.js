const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}


PangramFinder.prototype.isPangram = function () {
  phraseArray = this.phrase.split('');
  //true if every letter in alphabet is in phrase
  const result = this.alphabet.every((alphabet_letter) => {
    // condition must be true if letter is in phrase
    return phraseArray.some((provided_letter) => {
      // check if individual alphabet letter is in phrase
      return provided_letter.toLowerCase() === alphabet_letter;
    });
  })
  return result;
}

module.exports = PangramFinder;
