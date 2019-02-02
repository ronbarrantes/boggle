import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseLeave=this.handleMouseEnter.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }

  handleClick(event){
    const { children, innerHTML } = event.target
    let letter = children[0] ? children[0].innerHTML : innerHTML

    this.props.selectLetterToggle(letter)
    this.props.getLetterId(this.props.letterId)
  }

  handleMouseEnter(event){
    let letter = event.target.innerHTML
    this.props.selectLetterHover(letter)
    this.props.getLetterId(this.props.letterId)
    this.props.checkIfVisited(this.props.letterId)
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

