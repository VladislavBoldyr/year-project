import React,{Component} from 'react';
import playButtonDown from './playButtonDown.svg';
import playButtonUp from './playButtonUp.svg';
import './SelectTime.css';
import WordsStore from  '../stores/WordsStore';
import Modal from 'react-modal';
import WordsActions from '../actions/WordsActions';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//баг с выделение круга,при нажатие на первый ряд,реагирует div со вторым рядом
//разобраться со свойстом круга
export  default class SelectTime extends React.Component {
  constructor(props) {
     super(props);
     this.state={
     time: WordsStore.getTime(),
     type: WordsStore.getType(),
     checkImage:false,
     checkElementTime:true,
     checkOpen:true,
     checkState:"",
     text:"",
     modalIsOpen: false,
     statement:"",
     question:"",
     negation:""
     }

     this.inverseImage = this.inverseImage.bind(this);
     this.saveStatePast = this.saveStatePast.bind(this);
     this.saveStatePresent = this.saveStatePresent.bind(this);
     this.saveStateFuture = this.saveStateFuture.bind(this);
     this.openModal = this.openModal.bind(this);
     this.afterOpenModal = this.afterOpenModal.bind(this);
     this.closeModalNo = this.closeModalNo.bind(this);
     this.closeModalYes = this.closeModalYes.bind(this);
     this.saveTypeSimple = this.saveTypeSimple.bind(this);
     this.saveTypeContinuos = this.saveTypeContinuos.bind(this);
     this.saveTypePrefectSimple = this.saveTypePrefectSimple.bind(this);
     this.saveTypePrefectContinuos = this.saveTypePrefectContinuos.bind(this);
     this.formStatement = this.formStatement.bind(this);
     this.formQuestion = this.formQuestion.bind(this);
     this.formNegation = this.formNegation.bind(this);

  }
  componentDidMount() {
      WordsStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
      WordsStore.removeChangeListener(this._onChange);
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModalNo() {
    this.setState({modalIsOpen: false});
  }
  closeModalYes() {
    WordsActions.request(this.props.subject,this.props.verb,this.state.time,this.state.type);
    this.setState({modalIsOpen: false});
    alert(this.state.question);
  }
  formStatement() {
    this.setState({
      statement:"statement"
    });
  }
  formQuestion() {
    this.setState({
      question:"question"
    });
  }
  formNegation() {
    this.setState({
      negation:"negation"
    });
  }
  inverseImage() {
    this.setState({
      checkImage:!this.state.checkImage
    });
  }
  saveStatePast() {
    //не знаю зачем это я писал)
    /*if (!this.state.checkOpen) {
        this.setState({
          checkOpen:false
        });
        return;
    }*/
    WordsStore.setTime('Past');
    this.setState({
      time:WordsStore.getTime(),
      //checkElementTime:!this.state.checkElementTime
      //если перевыбирать время,то получается что придется два раза кликать по нему,если всего лишь поменял время два раза
    });

  }
  saveStatePresent() {
    WordsStore.setTime('Present');
    /*if (!this.state.checkOpen) {
        this.setState({
          checkOpen:false
        });
        return;
    }*/
    this.setState({
      time:WordsStore.getTime(),
      //checkElementTime:!this.state.checkElementTime
    });
  }
  saveStateFuture() {
    WordsStore.setTime('Future');
    /*if (!this.state.checkOpen) {
        this.setState({
          checkOpen:false
        });
        return;
    }*/
    this.setState({
      time:WordsStore.getTime(),
      //checkElementTime:!this.state.checkElementTime,
    });
  }

    saveTypeSimple() {
      WordsStore.setType('Simple');
      this.setState({
        type:WordsStore.getType()
      });
    }
    saveTypeContinuos() {
      WordsStore.setType('Continuos');
      this.setState({
        type:WordsStore.getType()
      });
    }
    saveTypePrefectSimple() {
      WordsStore.setType('Prefect Simple');
      this.setState({
        type:WordsStore.getType()
      });
    }
    saveTypePrefectContinuos() {
      WordsStore.setType('Prefect Continuos');
      this.setState({
        type:WordsStore.getType()
      });
    }


  render () {
    let ViewElementsTime = <div></div>
    let checkViewImage = <input type="image" name="picblablaAppblablaAppture"  src={playButtonDown} className="play" onClick={this.inverseImage} />
    if (this.state.checkImage) {
        checkViewImage =
            <div>
              <input type="image" name="picture"  src={playButtonUp} className="play" onClick={this.inverseImage} />
              <div>
                <inline>
                  <button className="round" onClick={this.saveStatePast}>Past</button>
                  <button className="round" onClick={this.saveStatePresent}>Present</button>
                  <button className="round" onClick={this.saveStateFuture}>Future</button>
                </inline>
              </div>
            </div>
    }

    if (this.state.checkElementTime && this.state.checkImage ) {
        ViewElementsTime =
            <div>
              <inline>
                <button onClick={(event) => {this.openModal();this.saveTypeSimple()}}  className="round1">Simple</button>
                <button onClick={(event) => {this.openModal();this.saveTypeContinuos()}}  className="round1">Continuos</button>
                <button onClick={(event) => {this.openModal();this.saveTypePrefectSimple()}}  className="round1">Prefect Simple</button>
                <button onClick={(event) => {this.openModal();this.saveTypePrefectContinuos()}}  className="round1">Prefect Continuos</button>
              </inline>
              <div>
                <button className="form" onClick={this.formStatement}>!</button>
                <button className="form" onClick={this.formQuestion}>?</button>
                <button className="form" onClick={this.formNegation}>-</button>
              </div>
            </div>
    }
    return (
          <div>
            {checkViewImage}
            {ViewElementsTime}
            <div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h4>Want to work with {this.state.time} {this.state.type}</h4>
                  <form>
                    <button onClick={this.closeModalNo}>No</button>
                    <button onClick={this.closeModalYes}>Yes</button>
                 </form>
              </Modal>
            </div>
          </div>
    );
  }
}
