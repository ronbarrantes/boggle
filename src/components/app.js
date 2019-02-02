import React from 'react'

import Board from './board'
import WordList from './word-list'
import WordGuess from './word-guess'
import * as util from '../lib/util'
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
    this.setState({
      lettersById: util.boardData.byId,
      lettersByHash: util.boardData.byHash,
    })
  }

  selectLetterToggle(letter) {
    this.setState(state => ({
      isActive: !state.isActive,
    }), () => { this.state.isActive ?
      this.setState({ word: letter }):(
        this.handleComplete(this.state.word)
      )
    })
  }

  selectLetterHover(letter){
    if(this.state.isActive){
      let letterBuild = this.state.word
      let word = letterBuild+=letter
      this.setState({ word })
      this.highlightLetter(this.state.letterId)
    }
  }

  getLetterId(letterId){
    this.setState({ letterId })
  }

  highlightLetter(letterId){
    this.setState(this.setLetterVisited(letterId, true))
  }

  resetLetters(){
    const { lettersById } = this.state
    lettersById.forEach(letterId => {
      this.setState(this.setLetterVisited(letterId, false))
    })
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
    console.log('CHECKING', letterId)
    console.log(letterId ? 'yes':'no')
    console.log('============')
    letterId && this.state.lettersByHash[letterId].isVisited &&
    console.log(letterId, 'has been visited')
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
      .then(()=>{this.resetLetters()
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Boggle</h1>
        <p>{this.state.errorMessage}</p>
        <p>{this.state.isActive.toString()}</p>
        <Board
          getLetterId={this.getLetterId}
          onComplete={this.handleComplete}
          lettersById={this.state.lettersById}
          lettersByHash={this.state.lettersByHash}
          selectLetterHover={this.selectLetterHover}
          selectLetterToggle={this.selectLetterToggle}
        />
        <WordGuess word={this.state.word} />
        <WordList title={'Valid Words'} wordList={this.state.validWords} />
        <WordList title={'Invalid Words'} wordList={this.state.invalidWords} />
      </div>
    )
  }
}

export default App