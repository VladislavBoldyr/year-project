import React, { Component } from 'react';
import './EnterWord.css';
import SelectTime from './SelectTime.js';
import WordsActions from '../actions/WordsActions';
import WordsStore from  '../stores/WordsStore';

function getStateFromFlux() {
    return {
      //  isLoading: WordsStore.isLoading(),
        verb: WordsStore.getVerb(),
        subject: WordsStore.getSubject()
    };
}
export default class EnterWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
        verb: WordsStore.getVerb(),
        subject: WordsStore.getSubject()
    };
    this.changeVerb = this.changeVerb.bind(this);
    this.changeSubject = this.changeSubject.bind(this);
    this.enterSubject = this.enterSubject.bind(this);
    this.enterVerb = this.enterVerb.bind(this);
    this.handleWordsAdd = this.handleWordsAdd.bind(this);
  }

  /*componentWillMount() {
      WordsActions.loadNotes();
  }*/

  componentDidMount() {
      WordsStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
      WordsStore.removeChangeListener(this._onChange);
  }
  /*shouldComponentUpdate(nextProps, nextState) {
    return nextState.subject !== this.state.subject;

}*/
  enterSubject() {
    let _subject =  WordsStore.getSubject();
    this.setState({
      subject:_subject,
      verb:this.state.verb
    });
  }
  enterVerb() {
    let _verb = WordsStore.getVerb();
    this.setState({
      verb:_verb,
      subject:this.state.subject
    });
  }
  handleWordsAdd() {
      WordsActions.writeWord(this.state.subject,this.state.verb);
  }
  changeVerb(val) {
    const _verb = val.target.value;
    WordsStore.setVerb(_verb);
  }
  changeSubject(val) {
    const _subject = val.target.value;
    WordsStore.setSubject(_subject);
  }
    render () {
      return (
        <div>
          <p align="justify">
            <div>
             <input type="text" size="20" placeholder="enter subject" onChange={this.changeSubject} />
             <inline className="space">
               <button type="submit"  className="buttonSize"  onClick={this.enterSubject}>Enter </button>
             </inline>
            </div>
          </p>
          <p align="justify">
            <div>
             <input type="text" size="20" placeholder="enter verb" onChange={this.changeVerb}/>
             <inline className="space">
               <button type="submit"  className="buttonSize"  onClick={this.enterVerb}>Enter</button>
             </inline>
            </div>
          </p>
          <div>
         <SelectTime handleWordsAdd = {this.handleWordsAdd}/>
         </div>
         <div>{this.state.subject}</div>
         <div>{this.state.verb}</div>
         </div>
      );
    }


}
