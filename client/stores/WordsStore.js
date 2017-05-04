import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';


let  _subject = "";
let  _verb = "";
let _time = "";
let _type = "";
let _loadingError = null;
let _isLoading = true;



const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },
    setVerb(verb) {
      _verb = verb;
    },
    setSubject(subject) {
      _subject = subject;
    },
    getSubject() {
        return _subject;
    },
    getVerb() {
        return _verb;
    },
    setTime(time) {
      _time = time;
    },
    setType(type) {
      _type = type;
    },
    getTime() {
      return _time;
    },
    getType() {
      return _type;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_WORDS_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }
        case AppConstants.REQUEST: {
          _isLoading = false;
          _subject = _subject;
          _verb = _verb;
          _time = _time;
          _type =_type;
          _loadingError = null;
          TasksStore.emitChange();
          break;
        }
        /*case AppConstants.WRITTEN: {
            _isLoading = false;
            _subject = _subject;
            _verb = _verb;
            _loadingError = null;
            TasksStore.emitChange();
            break;
        }
        case AppConstants.TIME: {
          _time = _time;
          _type =_type;
          TasksStore.emitChange();
          break;
        }*/


        /*case AppConstants.LOAD_NOTES_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }*/

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;
