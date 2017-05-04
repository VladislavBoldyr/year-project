
let sentenceForNegation = "black coffee";
let sentenceForQuestion = "black coffee";
function PastSimple(subject,verb,typeSentence ) {
  let sentenceForStatment = "black coffee";
   if (typeSentence == 'statement') {
     return subject + " " +verb + "ed" + " " + sentenceForStatment;
   }
   if (typeSentence == 'negation') {
     return subject + " " + "didn't" + " " + verb + " " + sentenceForNegation;
   }
   if (typeSentence == 'question') {
     return "Did " + subject + " " + verb + sentenceForQuestion + "?";
   }
  return typeSentence;
}
function PastContinuous(subject,verb,typeSentence) {

}
function PastPerfectSimple(subject,verb,typeSentence) {}
function PastPerfectContinuous(subject,verb,typeSentence) {}
function PresentSimple(subject,verb,typeSentence) {}
function PresentContinuous(subject,verb,typeSentence) {}
function PresentPerfectSimple(subject,verb,typeSentence) {}
function PresentPerfectContinuous(subject,verb,typeSentence) {}
function FutureSimple(subject,verb,typeSentence) {}
function FutureContinuous(subject,verb,typeSentence) {}
function FuturePerfectSimple(subject,verb,typeSentence) {}
function FuturePerfectContinuous(subject,verb,typeSentence) {}

export  function algoritmForRegularVerbs(subject,verb,time,type,typeSentence) {
      let Functions = [PastSimple,PastContinuous,PastPerfectSimple,PastPerfectContinuous,
                      PresentSimple,PresentContinuous,PresentPerfectSimple,PresentPerfectContinuous,
                      FutureSimple,FutureContinuous,FuturePerfectSimple,FuturePerfectContinuous
                     ];
        for (let index = 0; index < Functions.length; ++index) {
          if (Functions[index].name == time + type) {
            return Functions[index](subject,verb,typeSentence);
          }
        }
      return "error";
};
