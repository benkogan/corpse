
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


