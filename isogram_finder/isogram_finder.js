const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.moreThanOne = function(item, array){
    const howMany = array.filter(element => element === item).length;
    if (howMany > 1){
        return true;
    }
    return false;
}

IsogramFinder.prototype.isIsogram = function () {
    const splitWord = this.word.split('');
    return splitWord.every((letter) => {
        return !this.moreThanOne(letter, splitWord);
    });
};

module.exports = IsogramFinder;
