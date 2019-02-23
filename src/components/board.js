import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import LetterItem from './letter-item'
import WordGuess from './word-guess'



const Board = (props) => {
  const {
    // word,
    lettersById,
    // getLetterId,
    lettersByHash,
    // checkIfVisited,
    // selectLetterHover,
    // selectLetterToggle,
    // resetLetters,
  } = props


  // this.props.initBoard()

  return (
    <div className='board'>
      {/* <WordGuess word={word} resetLetters={resetLetters} /> */}
      <div className='boundary sides'
      // onMouseEnter={resetLetters}
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
          />
        )}
      </ul>
      <div className='boundary sides'
      // onMouseEnter={resetLetters}
      ></div>
      <div className='boundary bottom'
      // onMouseEnter={resetLetters}
      ></div>
    </div>
  )
}

const mapStateToProps = state => ({
  lettersById: state.board.lettersById,
  lettersByHash: state.board.lettersByHash,
})

export default connect(mapStateToProps)(Board)
