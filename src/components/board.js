import React from 'react'
import { connect } from 'react-redux'

import {  setBoardActive, activateEverything, toggleActive } from '../actions/board'
import { checkWord, addLetter, setLetter } from '../actions/word'

import LetterItem from './letter-item'
import WordGuess from './word-guess'

const Board = (props) => {

  const {
    word,
    lettersByHash,
    setBoardActive,
    resetWord,
    activateEverything,
    setLetter,
    isActive,
    addLetter,
    toggleActive,
  } = props

  return (
    <div className='board'>
      <WordGuess word={word}
        // resetWord={resetWord}
      />
      <div className='boundary sides'
        // onMouseEnter={resetWord}
      ></div>
      <ul>
        {Object.keys(lettersByHash).map((letterId)=>
          <LetterItem
            key={letterId}
            letterId={letterId}
            letter={lettersByHash[letterId].letter}
            isVisited={lettersByHash[letterId].isVisited}
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


const mapStateToProps = state => ({
  word: state.word,
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
