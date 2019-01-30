import React from 'react'
import LetterItem from './letter-item'

const Board = (props) => {

  const { handleSelect } = props

  return (
    <div className='board'>
      <ul>
        {props.boardLetters.map((letter, i)=>(
          <li 
            key={i}
            onClick={props.handleClick}
          >
            <LetterItem 
              letter={letter}
              handleClick={props.handleClick}
              handleSelect={handleSelect}
            />
          </li>)
        )}
      </ul>
    </div>
  )
}

export default Board
