import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(props){
    super(props)
    this.state={ letterId: '' }
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseLeave=this.handleMouseEnter.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }
  
  handleMouseEnter(event){
    this.props.selectLetterHover(event)
    this.props.getLetterId(this.props.letterId)
  }
  
  handleClick(event){
    this.props.getLetterId(this.props.letterId)
    this.props.selectLetterToggle(event)
  }

  handleMouseLeave(event){

  }

  render(){
    return(
      <li
        onClick={this.handleClick}
        className={this.props.visited ? 'visited':'notVisited'}
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