import React from 'react'
import LetterItem from './letter-item'

const Board = (props) => {
  const {
    lettersById,
    getLetterId,
    lettersByHash,
    selectLetterHover,
    selectLetterToggle,
    checkIfVisited,
  } = props
  return (
    <div className='board'>
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
