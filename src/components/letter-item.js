import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(){
    super()
    this.selectLetter = this.selectLetter.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  selectLetter(event){
    this.props.selectLetterHover(event)
  }

  handleClick(event){
    this.props.selectLetterToggle(event)
  }

  render(){
    return(
      <li
        onClick={this.handleClick}
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