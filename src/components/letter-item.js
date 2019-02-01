import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(){
    super()
    this.selectLetterAction = this.selectLetterAction.bind(this)
    this.handleClickAction = this.handleClickAction.bind(this)
  }

  selectLetterAction(event){
    this.props.selectLetterHover(event)
  }

  handleClickAction(event){
    this.props.selectLetterToggle(event)
  }

  render(){
    return(
      <li
        onClick={this.handleClickAction}
        className={this.props.visited ? 'visited':'notVisited'}
      >
        <div 
          onMouseEnter={this.selectLetterAction}>
          {this.props.letter}
        </div>
      </li>
    )
  }
}



export default LetterItem 