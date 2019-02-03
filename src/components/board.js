import React from 'react'
import LetterItem from './letter-item'
import WordGuess from './word-guess'

const Board = (props) => {
  const {
    word,
    lettersById,
    getLetterId,
    lettersByHash,
    checkIfVisited,
    selectLetterHover,
    selectLetterToggle,
    resetLetters,
  } = props
  return (
    <div className='board'>
      <WordGuess word={word} resetLetters={resetLetters} />
      <div className='boundary sides' onMouseEnter={resetLetters}></div>
      <ul>
        {lettersById.map((letterId)=>
          <LetterItem
            key={letterId}
            letterId={letterId}
            getLetterId={getLetterId}
            selectLetterHover={selectLetterHover}
            selectLetterToggle={selectLetterToggle}
            letter={lettersByHash[letterId].letter}
            isVisited={lettersByHash[letterId].isVisited}
            checkIfVisited={checkIfVisited}
          />
        )}
      </ul>
      <div className='boundary sides' onMouseEnter={resetLetters}></div>
      <div className='boundary bottom' onMouseEnter={resetLetters}></div>
    </div>
  )
}

export default Board
