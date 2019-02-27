import React, { Component } from 'react'
import { connect } from 'react-redux'

import {  setBoardActive, activateEverything, toggleActive } from '../actions/board'
import { checkWord, addLetter, setLetter } from '../actions/word'

import LetterItem from './letter-item'
import WordGuess from './word-guess'

class Board extends Component {

  constructor(props){
    super(props)
    this.state = { isActive : false }
  }

  render(){
    const {
      word,
      lettersById,
      lettersByHash,
      setBoardActive,
      resetWord,
      activateEverything,
      setLetter,
      isActive,
      addLetter,
      toggleActive,
    } = this.props

    return (
      <div className='board'>
        <WordGuess word={word}
          // resetWord={resetWord}
        />
        <div className='boundary sides'
          // onMouseEnter={resetWord}
        ></div>
        <ul>
          {lettersById.map((letterId)=>
            <LetterItem
              key={letterId}
              letterId={letterId}
              // getLetterId={getLetterId}
              // selectLetterHover={selectLetterHover}
              // selectLetterToggle={selectLetterToggle}
              letter={lettersByHash[letterId].letter}
              isVisited={lettersByHash[letterId].isVisited}
              // checkIfVisited={checkIfVisited}
              toggleActive={toggleActive}
              addLetter={addLetter}
              resetWord={resetWord}
              setLetter={setLetter}
              setBoardActive={setBoardActive}
              checkWord={checkWord}
              isActive={isActive}
              activateEverything={activateEverything}
            />
          )}
        </ul>
        <div className='boundary sides'
          // onMouseEnter={resetWord}
        ></div>
        <div className='boundary bottom'
          // onMouseEnter={resetWord}
        ></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  word: state.word,
  lettersById: state.board.lettersById,
  lettersByHash: state.board.lettersByHash,
  isActive: state.board.isActive,
})

const mapDispatchToProps = {
  setBoardActive,
  setLetter,
  // resetWord,
  checkWord,
  activateEverything,
  addLetter,
  toggleActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
