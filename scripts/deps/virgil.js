
// TODO: add limiters for repeat words
// TODO: simplify grammar

var lexicon = require('./lexicon');

/*
 * Construction functions.
 * --------------------------------------------------------------
 */

function randomProduction(symbol, lexicon) {
  var productions = lexicon[symbol];
  if (!productions) return undefined;
  var randomIndex = Math.floor(Math.random() * productions.length);
  return productions[randomIndex];
}

function randomExpansion(symbol, lexicon) {
  var production = randomProduction(symbol, lexicon);
  var productionSymbols;

  // symbol is a terminal
  if (!production) return symbol;

  // divide string into words; one per symbol
  productionSymbols = production.split(' ');

  return productionSymbols.map(function(sym){
    return randomExpansion(sym, lexicon);
  }).join(' ');
}

function randomSentence() {
  var sentence = randomExpansion('sentence', lexicon);
  if (sentence.split(' ').length > 7) return randomSentence();
  return sentence;
}

/*
 * Limiting functions.
 * --------------------------------------------------------------
 */

// TODO: test all these

var closedClass = (function(){
  var closedClasses= [
    'Relative-Clause',
    'Conjunction',
    'Article',
    'Preposition',
    'Modal-Verb'];
  var closedWords = [];

  closedClasses.forEach(function(element){
    closedWords.push(lexicon[element]);
  });

  return closedWords;
})();


function limitLength(sentence) {
  var limit = 7;
  if (sentence.split(' ').length > limit) return false;
  else return true;
}

/* todo: foreach isnt right
function limitDuplicates(sentence) {
  if (sentence.length <= 2) return true;

  sentence.split(' ').forEach(function(word, index){
    // skip closed class words
    if (closedClass.indexOf(word) > -1) continue;

    var restOfSentence = sentence.slice(index + 1);
    if (restOfSentence.indexOf(word) !== -1) return false;
  });

  // no dupes found
  return true;
}
*/

module.exports.sentence = randomSentence;

