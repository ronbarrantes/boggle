import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(){
    super()
    this.selectLetter = this.selectLetter.bind(this)
  }

  selectLetter(e){
    this.props.toggleVisited(this.props.num)
    this.props.handleSelect(e)
  }

  render(){
    return(
      <div 
        onMouseEnter={this.selectLetter}>
        {this.props.letter}
      </div>
    )
  }
}



export default LetterItem 