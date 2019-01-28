import React from 'react'
import ReactDOM from 'react-dom'

import Board from './components/board'
import WordList from './components/word-list'
import WordGuess from './components/word-guess'

import './styles.css'

const apiURL =
  'https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = { wordList: [], isValid: false, word: 'myCurrentWord' }
    this.handleComplete = this.handleComplete.bind(this)
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
      .then(res => console.log(res))

    this.setState({ wordList: [...this.state.wordList, word] })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <WordGuess word={this.state.word} />
        <Board onComplete={this.handleComplete} />
        <WordList wordList={this.state.wordList} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
