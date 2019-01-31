import React, { Component } from 'react'
import LetterItem from './letter-item'

class Board extends Component {

  constructor(){
    super()
    this.state={ letterId: '' }
    this.handleClick = this.handleClick.bind(this) 
    this.getLetterId = this.getLetterId.bind(this)
  }

  handleClick(event){
    this.props.handleClick(event)
  }

  getLetterId(l){
    console.log(l)
  }

  render(){
    const { 
      handleSelect, lettersById, lettersByHash } = this.props

    // got to figure out how to get the letterId from the LI
    // got to move the li into the letterItem component
    // and maybe handle the click there   
    return (
      <div className='board'>
        <ul>
          {lettersById.map((letterId)=>{
            let { visited } = lettersByHash[letterId]
            return (
              <li 
                key={letterId}
                onClick={this.props.handleClick}
                className={visited ? 'visited':'notVisited'}
              >
                <LetterItem 
                  handleSelect={handleSelect}
                  letter={lettersByHash[letterId].letter}
                  visited={lettersByHash[letterId].visited}
                />
              </li>)
          })}
        </ul>
      </div>
    )
  }
}
export default Board
