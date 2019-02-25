import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseLeave=this.handleMouseEnter.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }

  handleClick(event){
    console.log('IS_ACTIVE', this.props.isActive)
    this.props.activateEverything()
    this.props.setLetter(this.props.letterId)
  }

  handleMouseEnter(event){
    this.props.setLetter(this.props.letterId)
  }

  render(){
    const liClass = ['letter-item', this.props.isVisited && 'visited'].join(' ')
    return(
      <li
        onClick={this.handleClick}
        className={liClass}
      >
        <div
          onMouseEnter={this.handleMouseEnter}>
          {this.props.letter}
        </div>
      </li>
    )
  }
}

export default LetterItem

