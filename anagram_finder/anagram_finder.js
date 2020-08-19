const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.standardise = function(word){
    return word.toLowerCase().split('').sort().join('');
};

AnagramFinder.prototype.isAnagram = function(word1, word2){
    if (word1 === word2){
        return false;
    } else{
        return this.standardise(word1) === this.standardise(word2);
    };
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    let result = otherWords.filter((word) => {
      return this.isAnagram(this.word, word);
    });
    return result
};

module.exports = AnagramFinder;
