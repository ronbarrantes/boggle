import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(){
    super()
    this.selectLetter = this.selectLetter.bind(this)
  }

  selectLetter(e){
    this.props.handleSelect(e)
  }

  render(){
    return(
      <li
        onClick={this.props.handleClick}
        className={this.props.visited ? 'visited':'notVisited'}
      >
        <div 
          onMouseEnter={this.selectLetter}>
          {this.props.letter}
        </div>
      </li>
    )
  }
}



export default LetterItem 