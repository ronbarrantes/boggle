import React, { useState } from 'react'
import { connect } from 'react-redux'

import {  setBoardActive, setLetterVisited, resetLetters } from '../actions/board'
import { checkWord } from '../actions/word'

import LetterItem from './letter-item'
import WordGuess from './word-guess'

const Board = (props) => {
  const {
    word,
    lettersById,
    // getLetterId,
    lettersByHash,
    // checkIfVisited,
    // selectLetterHover,
    // selectLetterToggle,
    setBoardActive,
    resetLetters,
    isActive,
  } = props


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
            setLetterVisited={setLetterVisited}
            setBoardActive={setBoardActive}
            checkWord={checkWord}
            isActive={isActive}
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

const mapStateToProps = state => ({
  word: state.word,
  lettersById: state.board.lettersById,
  lettersByHash: state.board.lettersByHash,
  isActive: state.board.isActive,
})

const mapDispatchToProps = {
  setBoardActive,
  setLetterVisited,
  resetLetters,
  checkWord,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
