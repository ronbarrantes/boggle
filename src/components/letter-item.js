import React, { Component } from 'react'

const emptyState = {
  letter: '',
  selected: false,
  enabled: true,
}

class LetterItem extends Component  {
  constructor(){
    super()
    this.selectLetter = this.selectLetter.bind(this)
  }

  selectLetter(e){
    this.props.handleSelect(e)
  }

  render(){
    console.log(this.props)
    return(
      <div 
        onMouseEnter={this.selectLetter}>
        {this.props.letter}
      </div>
    )
  }
}



export default LetterItem 