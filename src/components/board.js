import React, { Component } from 'react'

import WordGuess from './word-guess'
import LetterItem from './letter-item'

import * as util from '../lib/util'

const emptyState = {
  word: '',
  isActive: false,
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = emptyState 
    this.letters = util.generateLetterArray()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({ word: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onComplete(this.state.word)
    this.setState(emptyState)
  }

  render() {
    console.log('BOARD_STATE-->', this.state)
    const { word } = this.state
    return (
      <div className='board'>
        <WordGuess word={this.state.word} />
        <ul>
          {this.letters.map((letter, i)=>(
            <li key={i}>
              <LetterItem letter={letter}/>
            </li>)
          )}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="word"
            value={word}
            onChange={this.handleChange}
          />
          <button type="submit">Check</button>
        </form>
      </div>
    )
  }
}

export default Board
