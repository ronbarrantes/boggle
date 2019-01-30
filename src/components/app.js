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
      isValid: false, 
      boardLetters: [],
      isActive: false,
    }
    this.handleComplete = this.handleComplete.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount(){
    this.setState({ boardLetters: util.generateLetterArray() })
  }
  
  handleClick() {
    console.log('Clicking')
    this.setState(state => ({
      isActive: !state.isActive,
    }))
  }

  handleSelect(event){
    let letter = event.target.innerHTML
    let letterBuild = this.state.word
    let word = letterBuild+=letter
    this.setState({ word })
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
      })    
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <p>{this.state.isActive.toString()}</p>
        <Board 
          word={this.state.word}        
          boardLetters={this.state.boardLetters} 
          handleClick={this.handleClick}
          handleSelect={this.handleSelect}
          onComplete={this.handleComplete}  
        />
        <WordGuess word={this.state.word} />
        <WordList wordList={this.state.wordList} />
      </div>
    )
  }
}

export default App