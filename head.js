(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/*
module.exports = {
  sentence: ['noun_phrase verb_phrase'],
  verb_phrase: ['modal_verb gerund'],
  noun_phrase: ['noun'],
  noun: ['Paradiso'],
  modal_verb: ['is', 'will be'],
  gerund: ['coming']
}
TODO: add gerunds like above
*/


module.exports = {
  sentence: ['noun_phrase verb_phrase',
             'noun_phrase_pl verb_phrase_pl',
             'Expletive_Construction_pl noun_phrase_pl verb_phrase_pl Conjunction noun_phrase_pl',
             'sentence Conjunction sentence',
             'Relative_Clause sentence Modal_Verb Present_subjunctive_verb Preterite_Intrans_Verb prepositional_phrase_pl'],

  // singular
  noun_phrase: ['subject', 'noun_phrase prepositional_phrase'],
  verb_phrase: ['verb noun_phrase', 'verb prepositional_phrase', 'intrans_verb', 'Modal_Verb Present_subjunctive_verb Adjective', 'verb_phrase prepositional_phrase'],
  prepositional_phrase: ['Preposition noun_phrase', 'Preposition Common_Noun'],

  // plural
  noun_phrase_pl: ['subject_pl', 'noun_phrase_pl prepositional_phrase_pl'],
  verb_phrase_pl: ['verb_pl noun_phrase_pl',
                   'verb_pl prepositional_phrase_pl',
                   'intrans_verb_pl',
                   'Modal_Verb Present_subjunctive_verb Adjective Infinitive Present_Verb_pl Pronoun prepositional_phrase_pl'],
  prepositional_phrase_pl: ['Preposition noun_phrase_pl', 'Preposition Common_Noun_pl'],

  // singular
  subject: ['Proper_Noun', 'Article Common_Noun', 'Adjective Proper_Noun', 'Article Adjective Common_Noun', 'Adjective Common_Noun'],
  verb: ['future_verb', 'Present_Verb', 'Preterite_Verb'],
  intrans_verb: ['future_intrans_verb', 'Present_Intrans_Verb', 'Preterite_Intrans_Verb'],

  // plural
  subject_pl: ['Article_pl Common_Noun_pl', 'Article_pl Adjective Common_Noun_pl', 'Adjective Common_Noun_pl', 'subject_pl Conjunction noun_phrase'],
  verb_pl: ['future_verb', 'Present_Verb_pl', 'Preterite_Verb', 'future_passive_verb_pl'],
  intrans_verb_pl: ['future_intrans_verb', 'Present_Intrans_Verb_pl', 'Preterite_Intrans_Verb'],
  future_passive_verb_pl: ['Relative_Pronoun Modal_Verb Present_Verb_pl Adverb_post'],

  // neutral
  future_verb: ['Modal_Verb Present_Verb_pl', 'Modal_Verb Adverb Present_Verb_pl', 'Modal_Verb Present_subjunctive_verb', 'Modal_Verb Present_Intrans_Verb_pl'],
  future_intrans_verb: ['Modal_Verb Present_Intrans_Verb_pl', 'Modal_Verb Adverb Present_Intrans_Verb_pl'],

  // singular
  Proper_Noun: ['Paradiso', 'Reclaimer', 'Purgatorio', 'Delilah'],
  Common_Noun: ['desire', 'pain', 'intent', 'suffering', 'fall', 'other', 'eye', 'heaven', 'hell', 'fire', 'ruin'],
  Pronoun: ['it'],

  // plural
  Common_Noun_pl: ['angels', 'sins', 'heavens', 'years', 'graves', 'flames', 'feathers', 'gods'],

  // neutral
  Infinitive: ['to'],
  Relative_Clause: ['whether', 'if'],
  Relative_Pronoun: ['that'],
  Conjunction: ['and', 'or', 'but'],
  Adjective: ['dark', 'third', 'seventh', 'flawed', 'naked', 'perfect'],
  Adverb: ['hardly'], // precedes verb
  Adverb_post: ['well', 'poorly'], // follows verb
  Preposition: ['in', 'on', 'to', 'with', 'for', 'of'],
  Modal_Verb: ['will', 'must', 'should'],
  Preterite_Verb: ['took', 'saw', 'dreamed'],
  Preterite_Intrans_Verb: ['broke', 'fell', 'cried', 'died'],

  // singular
  Article: ['the', 'a', 'this'],
  Present_Verb: ['hits', 'takes', 'sees'],
  Present_Intrans_Verb: ['laughs', 'falls', 'cries', 'breaks'],
  Present_subjunctive_verb: ['be', 'not be'],

  // plural
  Article_pl: ['some', 'no'],
  Present_Verb_pl: ['break', 'take', 'see', 'disassemble', 'fake', 'kill', 'pay', 'need'],
  Present_Intrans_Verb_pl: ['laugh', 'fall', 'cry', 'seek', 'find', 'forget', 'wait'],
  Expletive_Construction_pl: ['there were', 'there are']
};



},{}],2:[function(require,module,exports){

var PIXEL_RATIO = (function(){
  var ctx = document.createElement('canvas').getContext('2d');
  var dpr = window.devicePixelRatio || 1;
  var bsr = ctx.webkitBackingStorePixelRatio
         || ctx.mozBackingStorePixelRatio
         || ctx.msBackingStorePixelRatio
         || ctx.oBackingStorePixelRatio
         || ctx.backingStorePixelRatio
         || 1;
  return dpr / bsr;
})();

function createHiDPICanvas(id, w, h, ratio) {
  var canvas;
  if (!ratio) ratio = PIXEL_RATIO;
  canvas = document.getElementById(id);
  canvas.width = w * ratio;
  canvas.height = h * ratio;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  return canvas;
}

module.exports.createHiDPICanvas = createHiDPICanvas;


},{}],3:[function(require,module,exports){

/*
 * copyright (c) 2014 - Ben Kogan <http://benkogan.com>
 */

// TODO: seperate out different interlude methods
// TODO: add easing to slowdown

// interlude music: a song and static at the same time?
// interlude: different font for each

// TODO: css reset?
// TODO: text glow
// TODO: music
// TODO: improve grammar


/*
 * Module dependencies.
 */

var lib = require('./lib');
var virgil = require('./virgil');

/*
 * Main.
 */

(function main(){
  var WIDTH = 600;
  var HEIGHT = 190;
  var TOTAL_SECTIONS = 4; // for exquisite corpse

  var canvasId = 'corpse';
  var canvas = lib.createHiDPICanvas(canvasId, WIDTH, HEIGHT * TOTAL_SECTIONS);
  var context = canvas.getContext('2d');
  var gradient;

  // seconds in each realm
  var realmTimer = 30; //15;

  // seconds for static interlude
  var interludeTime = 13 //6;

  // (shitty) cluster val for interlude that uses it
  var cluster = 0;
  // (shitty)
  var storyIteration = 0;

  // for interlude
  var interludeStatic = new Audio('media/static.mp3');
  var interludeWinds = new Audio('media/winds.mp3');
  interludeWinds.loop = true;
  interludeStatic.loop = true;

  interludeStatic.volume = 0.15;

  var prophecy = {
    font: 'italic 20pt ITCCheltenham LT BookCond',
    text: 'PARADISO IS COMING...',
    alpha: 1,
    x: 30,
    y: 100
  };

  // shift: percent of canvas to shift gradient by per interval
  // colors: gradient colors and canvas percentage positions

  var paradiso = {
    song: new Audio('media/ascent-trim.m4a'),
    interlude: interlude0,
    background: 'url(./images/eyes-closed.png)',
    shift: 0.015,
    colors: [
      { color: '#1F2749', position: 0.000 },
      { color: '#183C68', position: 0.125 },
      { color: '#6AAFE2', position: 0.375 },
      { color: '#93D3E9', position: 0.625 },
      { color: '#F4FFFF', position: 0.875 },
      { color: '#7FD4F6', position: 1.000 }
    ]
  };

  var purgatorio = {
    song: new Audio('media/mutation.mp3'),
    interlude: interlude1,
    background: 'url(./images/eyes-low.jpg)',
    shift: 0.030,
    colors: [
      { color: '#0B2E39', position: 0.000 },
      { color: '#385050', position: 0.125 },
      { color: '#929B69', position: 0.375 },
      { color: '#6E8784', position: 0.625 },
      { color: '#416176', position: 0.875 },
      { color: '#244E5B', position: 1.000 }
    ]
  };

  var inferno = {
    song: new Audio('media/minipops.m4a'),
    interlude: interlude2,
    background: 'url(./images/eyes.jpg)',
    shift: 0.045,
    colors: [
      { color: '#0E0F51', position: 0.000 },
      { color: '#9A00FF', position: 0.125 },
      { color: '#746980', position: 0.375 },
      { color: '#76325A', position: 0.625 },
      { color: '#5B1E62', position: 0.875 },
      { color: '#334365', position: 1.000 }
    ]
  };

  var realms = [paradiso, purgatorio, inferno];

  // loop music
  realms.forEach(function(realm){ realm.song.loop = true; });

  // our current divine state
  var canticum = new State(realms);

  //
  // Action timers.
  // ------------------------------------------------------------
  //

  /*
   * Heartbeat timer.
   */

  var beatInterval = 1.5; // seconds between beats
  var offBeatDelay = 0.4; // seconds after first beat
  var repeat = true;      // repeat beat twice between prophecies

  (function heartbeat(){

      // flip `repeat`

      repeat = !repeat;

      // on beat

      prophecy.alpha = 0;
      fadeIn(prophecy, .025);

      // off beat

      window.setTimeout(function(){
        prophecy.alpha = 0;
        fadeIn(prophecy, .05);
      }, offBeatDelay * 1000);

      // new prophecy in non-repeat interlude

      if (!repeat) prophecy.text = virgil.sentence().toUpperCase();

      // loop heartbeat at intervals

      window.setTimeout(heartbeat, beatInterval * 1000);

  })();

  /*
   * Slowdown timer.
   */

  // TODO: percentage-based? for diff speeds (base it off current percentage of inferno)
  // TODO: slowing algo

  window.setTimeout(function slowdown(){
      // TODO: maybe closure this shit to make it faster lol
      canticum.gradShift -= (.1 / 3) * canticum.realm.shift;

      // DRAFT
      var song = canticum.realm.song;
      song.playbackRate = (song.playbackRate - .1 < 0)
        ? 0
        : song.playbackRate - .01;

      if (canticum.gradShift < 0) {
        canticum.gradShift = 0;
        canticum.realm.song.pause();
        canticum.realm.song.playbackRate = 1;

        // start interlude music
        interludeStatic.play();
        interludeWinds.play();

        // (shitty) swap out bg image for interlude
//        var newBG = canticum.realm.background;
//        document.getElementById('corpse').style.backgroundImage = newBG;

        window.setTimeout(function(){
          // stop interlude music
          interludeStatic.pause();
          interludeWinds.pause();

          canticum.transpose();
        }, interludeTime * 1000);

        // repeat slowdown
        window.setTimeout(slowdown, realmTimer * 1000);
      } else {
        window.setTimeout(slowdown, 200);
      }
  }, realmTimer * 1000);

  //
  // Main loop.
  // ------------------------------------------------------------
  //

  /*
   * Animation loop.
   */

  window.requestAnimationFrame(function mainLoop(timestamp){

    // clear canvas

    context.clearRect(0, 0, WIDTH, HEIGHT);

    // if no gradient motion, use interlude method

    if (canticum.gradShift == 0) {

      noise(context);
      canticum.realm.interlude(context);
      storyIteration++;
      window.requestAnimationFrame(mainLoop);
      return;
    } else { storyIteration = 0; }

    // create background gradient

    gradient = context.createLinearGradient(0, 0, WIDTH, HEIGHT);

    // shift gradient

    canticum.gradColors.forEach(function(element, i, a){
      gradient.addColorStop(element.position, element.color);
      element.position += canticum.gradShift;
      if (element.position > 1) element.position = 0;
    });

    // add gradient

    context.fillStyle = gradient;
    context.fillRect(0, 0, 600, 190);

    // add text

    // TODO: these are for paradiso
    context.shadowColor = 'rgba(244, 255, 255, .8)';
    context.shadowOffsetX = 1;
    context.shadowOffsetY = 1;
    context.shadowBlur = 10;

    context.fillStyle = 'rgba(240, 240, 240, ' + prophecy.alpha + ')';
    context.font = prophecy.font;
    context.fillText(prophecy.text, 30, 100);

    // recurse loop

    window.requestAnimationFrame(mainLoop);

  }); // end mainLoop

  // interludes:
  //   inferno: story
  //   purgatorio: jp
  //   paradiso: ??

  // paradiso
  function interlude0(context){

    //context.fillstyle = 'rgba(240, 255, 255, .85)';
    context.fillstyle = '#FFFDE6';
    context.font = 'italic 20pt ITCCheltenham LT BookCond',
    context.fillText('WE NEED OUR GODS NOW MORE THAN EVER. . .', 80, 120);

    context.font = 'italic 12pt ITCCheltenham LT BookCond';

    var i = Math.random() * 1000
    for (; i >= 0; i--) {
      context.fillstyle = 'rgba(240, 240, 240, .6)';
      context.fillText('my future perfect', Math.random() * WIDTH, Math.random() * HEIGHT);
    }
  }

  // purgatorio
  function interlude1(context){
    // ぼく？
    var boku = eval('"\\u307C\\u304F\\uFF1F"');

    // これは...僕の意志？
    var question = boku
      + eval('"\\u3053\\u308C\\u306F"')
      + '. . .'
      + eval('"\\u50D5\\u306E\\u610F\\u5FD7\\uFF1F"');

    context.fillstyle = 'rgba(240, 240, 240, .85)';
    context.font = "24px 'Hiragino Sans GB W6'",
    context.fillText(question, 30, 100);

    cluster++;
    if (cluster > 1000) cluster = 0;
    for (var i = cluster / 40; i >= 0; i--) {
      context.fillstyle = 'rgba(240, 240, 240, 1)';
      context.fillText(boku, Math.random() * WIDTH, Math.random() * HEIGHT);
    }
    /////////////////////
  }

  // inferno
  function interlude2(context){
    var lines = [
      'In the burnt out core where Paradiso once was,',
      'the last running mainframe writes poems to a',
      'little girl he never knew. I know because I saw',
      'it --- or what was left of it before Paradiso',
      'folded upon itself; inflected. Thirty four million',
      'years is a long time to rot. Sometimes I wonder if',
      'there is any place more lonely than Paradiso\'s grave. . .'
    ];

    context.fillstyle = 'rgba(240, 240, 240, 1)';
    context.font = '12pt "Menlo"';

    // number of lines to print
    var iterationsAfterWhichToPrintNextLine = 70;
    var i = storyIteration / iterationsAfterWhichToPrintNextLine;

    lines.forEach(function(element, ind){
      if (ind <= i) {
        context.fillText(element, 15, (ind + 1) * 25);
      }
    });
  }

})(); // end main

//
// Helper functions.
// ------------------------------------------------------------
//

/*
 * TODO: replace `setInterval` with recursive `setTimeout`
 * (compare to make sure it doesn't ruin timing though)
 */

function fadeIn(t, increment) {
  var fadeRate = .03; // second between intervals
  var id;

  id = window.setInterval(function(){
    if (t.alpha >= 1) window.clearInterval(id);
    t.alpha += increment;
  }, fadeRate * 1000);
}

/*
 * Interference noise.
 * from <http://stackoverflow.com/questions/22003491>
 */

// NOTE: height is divided by 4 for ex. corpse; hack

function noise(ctx) {
  var w = ctx.canvas.width;
  var h = ctx.canvas.height / 4;
  var idata = ctx.getImageData(0, 0, w, h);

  var buffer32 = new Uint32Array(idata.data.buffer);
  var len = buffer32.length;
  var i = 0;
  var pr = 456 * Math.random();
  var prs = 716 * Math.random();;

  for (; i < len;) {
    buffer32[i++] = ((pr % 255)|0) << 24;
    pr += prs * 1.2;
  }

  ctx.putImageData(idata, 0, 0);
}

// abstranct state class
// effort towards easy tracking and isolation of mutable state
//
// gradShift initially set to realm's shift value, but note this is mutable

function State(realms) {

  this.realms = realms;
  this.realmIndex = 0;

  // move between realms
  this.transpose = function(nextRealm){

    // get next realm
    if (!nextRealm) nextRealm = this.realms[this.realmIndex];

    // set mutable properties
    this.realm = nextRealm;
    this.gradShift = nextRealm.shift;
    this.gradColors = nextRealm.colors;

    // start song
    this.realm.song.loop = true;
    this.realm.song.play();

    // forward realm index; looping at end
    this.realmIndex = (this.realmIndex + 1) % this.realms.length;
  }

  // load first realm on initialization
  this.transpose(realms[0]);
}


},{"./lib":2,"./virgil":4}],4:[function(require,module,exports){

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


},{"./lexicon":1}]},{},[3]);
