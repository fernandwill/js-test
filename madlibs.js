function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
    let result = "";
    result += "The " + myAdj + myNoun + myVerb + "to the store" + myAdverb;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

