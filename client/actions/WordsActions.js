import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const WordActions = {
    writeWord(subject,verb) {
      api.addWords(subject,verb)
      .then(() =>
        AppDispatcher.dispatch({
          type:Constants.WRITTEN
        })
      )
      .catch(err =>
      console.error('error')
      );
    },
    englishTimeType(time,type) {
      api.addTimeAndType(time,type)
      .then(() =>
          AppDispatcher.dispatch({
            type:Constants.TIME
          })
      ).
      catch(err => console.error('error'));
    },
    request(subject,verb,time,type,statement,question,negation) {
      api.addWordsAndTime(subject,verb,time,type,statement,question,negation)
      .then(() =>
        AppDispatcher.dispatch({
          type:Constants.REQUEST
        })
      )
      .catch(err =>
      console.error('error')
      );
    }
};

export default WordActions;
