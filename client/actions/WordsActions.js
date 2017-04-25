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
    englishTime(time) {
      api.addTime(time)
      .then(() =>
          AppDispatcher.dispatch({
            type:Constants.TIME
          })
      ).
      catch(err => console.error('error'));
    },
    englishTypeOfTime(type) {
      api.addType(type)
      .then(() =>
          AppDispatcher.dispatch({
            type:Constants.TYPE
          })
      ).
      catch(err => console.error('error'));
    }
};

export default WordActions;
