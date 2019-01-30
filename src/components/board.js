import React from 'react'
import LetterItem from './letter-item'

const Board = (props) => {

  const { handleSelect, boardData } = props
  console.log(boardData)

  let theMap = boardData.byId && boardData.byId.map(letter=>{
    
    return boardData.byHash[letter]
  })
  return (
    <div className='board'>
      <ul>
        {boardData.byId && boardData.byId.map((letter)=>{
        
          console.log(props.boardData.byHash[letter])
          return (
            <li 
              key={letter}
              onClick={props.handleClick}
            >
              <LetterItem 
                letter={props.boardData.byHash[letter].letter}
                visited={props.boardData.byHash[letter].visited}
                handleClick={props.handleClick}
                handleSelect={handleSelect}
              />
            </li>)
        }
        )}
      </ul>
    </div>
  )
}

export default Board
