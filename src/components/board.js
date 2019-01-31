import React, { Component } from 'react'
import LetterItem from './letter-item'

class Board extends Component {

  constructor(){
    super()
    this.state={ num:'' } 
  }

  render(){

    const { handleSelect, boardData } = this.props
    console.log(boardData)

    return (
      <div className='board'>
        <ul>
          {boardData.byId && boardData.byId.map((num)=>{
            let { visited } = boardData.byHash[num]
            return (
              <li 
                key={num}
                onClick={this.props.handleClick}
                className={visited ? 'visited':'notVisited'}
              >
                <LetterItem 
                  num={num}
                  handleSelect={handleSelect}
                  handleClick={this.props.handleClick}
                  letter={boardData.byHash[num].letter}
                  visited={boardData.byHash[num].visited}
                  toggleVisited={this.props.toggleVisited}
                />
              </li>)
          })}
        </ul>
      </div>
    )
  }
}
export default Board
