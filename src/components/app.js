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
    }
    this.handleComplete = this.handleComplete.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.toggleVisited = this.toggleVisited.bind(this)
  }

  componentDidMount(){
    this.setState({ 
      boardData: util.boardData,
    })
  }
  
  handleClick(event) {
    const { children, innerHTML } = event.target
    let letter = children[0] ? children[0].innerHTML : innerHTML
    console.log(event.target.num)

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

  toggleVisited(num){
    console.log('toggleNum-->', { 

      ...this.state.boardData.byHash 
    
    })
    // this.setState(state=>({ boardData: 
    //   !state.boardData.byHash[num].visited
    // }))
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
        <h1>Boggle</h1>
        <p>{this.state.isActive.toString()}</p>
        <Board 
          word={this.state.word}        
          boardData={this.state.boardData}
          handleClick={this.handleClick}
          handleSelect={this.handleSelect}
          onComplete={this.handleComplete}  
          toggleVisited={this.toggleVisited}
        />
        <WordGuess word={this.state.word} />
        <WordList wordList={this.state.wordList} />
      </div>
    )
  }
}

export default App