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
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.toggleVisited = this.toggleVisited.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  componentDidMount(){
    this.setState({ 
      boardData: util.boardData,
      lettersById: util.boardData.byId,
      lettersByHash: util.boardData.byHash,
    })
  }
  
  handleClick(event) {

    // console.log(event.target)

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



  handleSelect(event){
    if(this.state.isActive){
      let letter = event.target.innerHTML
      let letterBuild = this.state.word
      let word = letterBuild+=letter
      this.setState({ word })
    }
  }

  mouseOut(){
  // got to add a mouseOut
  // visited is needed for when I need to go back
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
          handleClick={this.handleClick}
          handleSelect={this.handleSelect}
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