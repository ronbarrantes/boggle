import React, { Component } from 'react'
import LetterItem from './letter-item'

const Board = (props) => {
  const { handleSelect, lettersById, lettersByHash } = props 
  return (
    <div className='board'>
      <ul>
        {lettersById.map((letterId)=>
          <LetterItem 
            key={letterId}
            letterId={letterId}
            handleClick={props.handleClick}
            handleSelect={handleSelect}
            letter={lettersByHash[letterId].letter}
            visited={lettersByHash[letterId].visited}
          />
        )}
      </ul>
    </div>
  )
}

export default Board
