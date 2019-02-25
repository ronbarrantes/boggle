import React, { Component } from 'react'
import { connect } from 'react-redux'

import {  setBoardActive, setLetter, resetLetters, activateEverything } from '../actions/board'
import { checkWord, addLetter } from '../actions/word'

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
      resetLetters,
      activateEverything,
      setLetter,
      isActive,
      addLetter,
    } = this.props

    return (
      <div className='board'>
        <WordGuess word={word}
          resetLetters={resetLetters}
        />
        <div className='boundary sides'
          onMouseEnter={resetLetters}
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
              addLetter={addLetter}
              resetLetters={resetLetters}
              setLetter={setLetter}
              setBoardActive={setBoardActive}
              checkWord={checkWord}
              isActive={isActive}
              activateEverything={activateEverything}
            />
          )}
        </ul>
        <div className='boundary sides'
          onMouseEnter={resetLetters}
        ></div>
        <div className='boundary bottom'
          onMouseEnter={resetLetters}
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
  resetLetters,
  checkWord,
  activateEverything,
  addLetter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
