import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(props){
    super(props)
    this.state={ letterId: '' }
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseLeave=this.handleMouseEnter.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }
  
  handleClick(event){
    const { children, innerHTML } = event.target
    let letter = children[0] ? children[0].innerHTML : innerHTML

    this.props.selectLetterToggle(letter)
    this.props.getLetterId(this.props.letterId)

    console.log(this.props.isVisited)
  }

  handleMouseEnter(event){
    let letter = event.target.innerHTML
    this.props.selectLetterHover(letter)    
    this.props.getLetterId(this.props.letterId)
  }

  handleMouseLeave(event){

  }

  render(){
    return(
      <li
        onClick={this.handleClick}
        className={this.props.isVisited ? 'visited':'notVisited'}
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