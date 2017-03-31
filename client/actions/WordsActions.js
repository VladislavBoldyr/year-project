import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const WordActions = {
    writeWord(word) {
      //  api.addWords(word)
        // .then(() =>
            AppDispatcher.dispatch({
              type:Constants.WRITTEN
            })
       //)
       //.catch(err =>
        //    console.error(err)
       //);
    }
};

export default WordActions;
