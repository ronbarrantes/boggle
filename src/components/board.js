import React from 'react'
import LetterItem from './letter-item'

const Board = (props) => {
  const { selectLetterHover, lettersById, lettersByHash } = props 
  return (
    <div className='board'>
      <ul>
        {lettersById.map((letterId)=>
          <LetterItem 
            key={letterId}
            letterId={letterId}
            selectLetterToggle={props.selectLetterToggle}
            selectLetterHover={selectLetterHover}
            letter={lettersByHash[letterId].letter}
            visited={lettersByHash[letterId].visited}
          />
        )}
      </ul>
    </div>
  )
}

export default Board
