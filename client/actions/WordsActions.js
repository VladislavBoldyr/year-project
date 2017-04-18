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
    }
};

export default WordActions;
