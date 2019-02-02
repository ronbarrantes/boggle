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
  } = props
  return (
    <div className='board'>
      <WordGuess word={word} />
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
    </div>
  )
}

export default Board
