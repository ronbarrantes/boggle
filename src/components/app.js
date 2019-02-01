import React from 'react'

import Board from './board'
import WordList from './word-list'
import WordGuess from './word-guess'
import * as util from '../lib/util'
import '../styles.css'

const apiURL =
  'https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary'

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      word: '',
      wordList: [],
      isActive: false,
      boardData: {},
      letterId: '',
      lettersById: [],
      lettersByHash: {},
      errorMessage: '',
    }
    this.handleComplete = this.handleComplete.bind(this)
    this.selectLetterToggle = this.selectLetterToggle.bind(this)
    this.selectLetterHover = this.selectLetterHover.bind(this)
    this.toggleVisited = this.toggleVisited.bind(this)
  }

  componentDidMount(){
    this.setState({ 
      boardData: util.boardData,
      lettersById: util.boardData.byId,
      lettersByHash: util.boardData.byHash,
    })
  }
  
  selectLetterToggle(event) {
    const { children, innerHTML } = event.target
    let letter = children[0] ? children[0].innerHTML : innerHTML

    this.setState(state => ({
      isActive: !state.isActive,
    }), () => { this.state.isActive ?
      this.setState({ word: letter }):(
        this.handleComplete(this.state.word)
      )
    })
  }

  selectLetterHover(event){
    if(this.state.isActive){
      let letter = event.target.innerHTML
      let letterBuild = this.state.word
      let word = letterBuild+=letter
      this.setState({ word })
    }
  }

  toggleVisited(num){
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
        res.valid && this.setState({ 
          wordList: [...this.state.wordList, word],
        })
        console.log('valid', res.valid) 
      })
      .catch(err=>{
        console.log('ERROR:', err)
        this.setState({ errorMessage: 'ERROR: sorry, something went wrong' })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Boggle</h1>
        <p>{this.state.errorMessage}</p>
        <p>{this.state.isActive.toString()}</p>
        <Board 
          selectLetterToggle={this.selectLetterToggle}
          selectLetterHover={this.selectLetterHover}
          onComplete={this.handleComplete}  
          lettersById={this.state.lettersById}
          lettersByHash={this.state.lettersByHash}
        />
        <WordGuess word={this.state.word} />
        <WordList wordList={this.state.wordList} />
      </div>
    )
  }
}

export default App