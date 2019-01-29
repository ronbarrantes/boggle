import React, { Component } from 'react'

import WordGuess from './word-guess'
import LetterItem from './letter-item'

import * as util from '../lib/util'

const emptyState = {
  word: '',
  wordArr: [],
  isActive: false,
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = emptyState 
    this.letters = util.generateLetterArray()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange(event) {
    this.setState({ word: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onComplete(this.state.word)
    this.setState(emptyState)
  }

  handleSelect(event){

    console.log(event.target.innerHTML)
  }



  handleClick(event){
    let letter = event.target.innerHTML
    let letterBuild = this.state.word

    let word = letterBuild+=letter

    console.log('clicking letter:', event.target.innerHTML)
    this.setState({ word })
    // this.setState(emptyState)
  }


  render() {
    console.log('BOARD_STATE-->', this.state)
    const { word } = this.state
    return (
      <div className='board'>
        <ul>
          {this.letters.map((letter, i)=>(
            <li key={i}
            >
              <LetterItem 
                letter={letter}
                handleSelect={this.handleClick}
              />
            </li>)
          )}
        </ul>
        <WordGuess word={this.state.word} />
        <form onSubmit={this.handleSubmit}>
          {/* <input
            type="text"
            name="word"
            value={word}
            onChange={this.handleChange}
          /> */}
          <button type="submit">Check</button>
        </form>
      </div>
    )
  }
}

export default Board
