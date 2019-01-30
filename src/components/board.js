import React, { Component } from 'react'
import LetterItem from './letter-item'

class Board extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('The word-->', this.props.word)
    this.props.onComplete(this.props.word)
  }

  render() {
    const { handleSelect } = this.props

    return (
      <div className='board'>
        <ul>
          {this.props.boardLetters.map((letter, i)=>(
            <li 
              key={i}
              onClick={this.props.handleClick}
            >
              <LetterItem 
                letter={letter}
                handleClick={this.props.handleClick}
                handleSelect={handleSelect}
              />
            </li>)
          )}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Check</button>
        </form>
      </div>
    )
  }
}

export default Board
