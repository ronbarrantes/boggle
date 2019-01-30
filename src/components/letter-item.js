import React, { Component } from 'react'

class LetterItem extends Component  {
  constructor(){
    super()
    this.selectLetter = this.selectLetter.bind(this)
  }

  selectLetter(e){
    this.props.handleSelect(e)
  }
// writing is visited????
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