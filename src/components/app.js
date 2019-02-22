import React from 'react'
import { connect } from 'react-redux'
import { initBoard } from '../actions/board'

import Board from './board'
import WordList from './word-list'
import '../styles.css'

const apiURL =
  'https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      validWords:[],
      invalidWords:[],
      isActive: false,
      letterId: '',
      lettersById: [],
      lettersByHash: {},
      errorMessage: '',
    }
    this.getLetterId = this.getLetterId.bind(this)
    this.resetLetters = this.resetLetters.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.highlightLetter= this.highlightLetter.bind(this)
    this.selectLetterHover = this.selectLetterHover.bind(this)
    this.selectLetterToggle = this.selectLetterToggle.bind(this)
    this.checkIfVisited = this.checkIfVisited.bind(this)
    this.setLetterVisited = this.setLetterVisited.bind(this)
  }

  componentDidMount(){
    this.props.initBoard()
  }

  selectLetterToggle(letter) { // action --> needs complementing middleware
    this.setState(state => ({
      isActive: !state.isActive,
    }), () => {
      this.state.isActive ?
        this.setState({ word: letter }):(this.handleComplete(this.state.word))
    })
  }

  selectLetterHover(letter){ // action
    if(this.state.isActive){
      let letterBuild = this.state.word
      let word = letterBuild+=letter
      this.setState({ word })
      this.highlightLetter(this.state.letterId)
    }
  }

  getLetterId(letterId){ // action --> 
    this.setState({ letterId })
  }

  highlightLetter(letterId){ // action --> 
    this.setState(this.setLetterVisited(letterId, true))
  }

  resetLetters(){ // --> action 
    console.log('RESETTING!!')
    const { lettersById } = this.state
    lettersById.forEach(letterId => {
      this.setState(this.setLetterVisited(letterId, false))
    })
    this.setState({ isActive: false })
    this.setState({ word: '' })
  }

  setLetterVisited(letterId, isVisited) {
    return state => ({
      lettersByHash: {
        ...state.lettersByHash,
        [letterId]: {
          isVisited,
          letter: state.lettersByHash[letterId].letter,
        },
      },
    })
  }

  checkIfVisited(letterId){
    if(letterId && this.state.lettersByHash[letterId].isVisited) {
      this.resetLetters()
    }
  }

  addWordToList(word, list) {
    this.state[list].includes(word) || this.setState({ [list]: [...this.state[list], word] })
  }

  handleComplete(word) {
    fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify({ word }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ word: '' })
        res.valid ?  this.addWordToList(word, 'validWords') : this.addWordToList(word, 'invalidWords')
      })
      .catch(err=>{
        console.log('ERROR:', err)
        this.setState({ errorMessage: 'ERROR: sorry, something went wrong' })
      })
      .then(this.resetLetters())
  }

  render() {
    console.log('THE PROPS -->', this.props)
    return (
      <div className="App">
        <h1>Boggle</h1>
        <p className='error'>{this.state.errorMessage}</p>
        <Board
          word={this.state.word}
          getLetterId={this.getLetterId}
          onComplete={this.handleComplete}
          lettersById={this.props.lettersById}
          lettersByHash={this.props.lettersByHash}
          selectLetterHover={this.selectLetterHover}
          selectLetterToggle={this.selectLetterToggle}
          checkIfVisited={this.checkIfVisited}
          resetLetters={this.resetLetters}
        />
        <WordList title={'Valid Words'} wordList={this.state.validWords} />
        <WordList title={'Invalid Words'} wordList={this.state.invalidWords} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lettersById: state.board.lettersById,
  lettersByHash: state.board.lettersByHash,
})
const mapDispatchToProps = {
  initBoard,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)