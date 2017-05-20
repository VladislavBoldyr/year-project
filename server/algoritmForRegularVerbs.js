
let sentenceForNegation = "black coffee";
let sentenceForQuestion = "black coffee";
let sentenceForStatment = "black coffee";
function PastSimple(subject,verb,typeSentence ) {
   if (typeSentence == 'statement') {
     return subject + " " +verb + "ed" + " " + sentenceForStatment;
   }
   if (typeSentence == 'negation') {
     return subject + " " + "didn't" + " " + verb + " " + sentenceForNegation;
   }
   if (typeSentence == 'question') {
     return "Did " + subject + " " + verb + " " + sentenceForQuestion + "?";
   }
}
function PastContinuos(subject,verb,typeSentence) {
    if (typeSentence == 'statement' ) {
      return subject + " " + 'was/were' + verb + 'ing' + " " + sentenceForStatment;
    }
    if (typeSentence == 'negation') {
      return subject + " " + 'wasn`t/weren`t' + verb + 'ing' + " " + sentenceForNegation;
    }
    if (typeSentence == 'question') {
      return 'Was/Were' + " " + subject + " " + verb + "ing" + " " + sentenceForQuestion + "?";
    }
}

function PastPerfectSimple(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
    return subject +  " had " + verb + "ed " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
    return subject +  " hadn`t " + verb + "ed " + sentenceForNegation;
  }
  if (typeSentence == 'question') {
    return "Had " + subject +  " " + verb + "ed " + sentenceForQuestion + " ?";
  }
}
function PastPerfectContinuos(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return   subject +  " had been " + verb + "ing " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return   subject +  " hadn`t been " + verb + "ing " + sentenceForNegation;
  }
  if (typeSentence == 'statement') {
        return  "Had " + subject + " been " + verb + "ing " + sentenceForQuestion + " ?";
  }
}
function PresentSimple(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return   subject +   + verb + "/" + verb + "`s" + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return   subject +  " don't/doesnt't " + verb + " " +  sentenceForNegation;
  }
  if (typeSentence == 'question') {
        return "Do/Does " + subject  + verb + " " + sentenceForQuestion + " ?";
  }
}
function PresentContinuos(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return   subject + "'m/'re/'s "   + verb +  + "ing " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return   subject + "'m/'re/'s not "  + verb + "ing " + sentenceForNegation;
  }
  if (typeSentence == 'question') {
        return   "Am/Are/Is " + subject + " "+ verb + "ing " + sentenceForQuestion + " ?";
  }
}

function PresentPerfectSimple(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return   subject + " have/has " +  verb +  "ed " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return   subject + " haven't/hasn't " + verb   + "ed " + sentenceForNegation;
  }
  if (typeSentence == 'question') {
    return "Have/Has " + subject + " " + verb + "ed " + sentenceForQuestion + " ?";
  }
}
function PresentPerfectContinuos(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return   subject + " have/has been "   + verb  + "ing " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return   subject + " haven't/hasn't been "   + verb  + "ing " + sentenceForNegation;
  }
  if (typeSentence == 'question') {
        return   "Have/Has " + subject + " been "    + verb  + "ing " + sentenceForQuestion + " ?";
  }
}
function FutureSimple(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return subject + " will " + verb + " "  + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return subject + " won't be " + verb  + "ing " + sentenceForNegation;
  }
  if (typeSentence == 'question') {
        return   "Will" + subject + verb + " " + sentenceForQuestion + " ?";
  }
}
function FutureContinuos(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return subject + " will be " + verb + "ing " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return subject + " won't be " + verb + "ing "+ sentenceForNegation;
  }
  if (typeSentence == 'question') {
        return "Will " + subject + " be " + verb  + "ing " + sentenceForStatment + " ?";
  }
}
function FuturePerfectSimple(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return subject + " will have " + verb + "ed " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return subject + " won't have " + verb + "ed "+ sentenceForNegation;
  }
  if (typeSentence == 'question') {
        return "Will " + subject + " have " + verb  + "ed " + sentenceForStatment + " ?";
  }
}
function FuturePerfectContinuos(subject,verb,typeSentence) {
  if (typeSentence == 'statement') {
        return subject + " will have been " + verb + "ing " + sentenceForStatment;
  }
  if (typeSentence == 'negation') {
        return subject + " won't have been " + verb + "ing "+ sentenceForNegation;
  }
  if (typeSentence == 'question') {
        return "Will " + subject + " have been " + verb  + "ing  " + sentenceForStatment + " ?";
  }
}

export  function algoritmForRegularVerbs(subject,verb,time,type,typeSentence) {
      let Functions = [PastSimple,PastContinuos,PastPerfectSimple,PastPerfectContinuos,
                      PresentSimple,PresentContinuos,PresentPerfectSimple,PresentPerfectContinuos,
                      FutureSimple,FutureContinuos,FuturePerfectSimple,FuturePerfectContinuos
                     ];
        for (let index = 0; index < Functions.length; ++index) {
          if (Functions[index].name == time + type) {
            return Functions[index](subject,verb,typeSentence);
          }
        }
      return "error";
};
