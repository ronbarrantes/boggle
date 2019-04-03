import React from 'react'
import { connect } from 'react-redux'

import { letter, isTileVisited } from '../reducers'
import { board, word } from '../actions'

const LetterItem = (props) =>  {
  const handleClick = () =>{
    console.log(`HANDLE CLICK`)
    props.toggleActive()
    props.setLetter(props.tileId)
  }

  const handleMouseEnter = () => {
    console.log('HANDLE MOUSE EVENT')
    props.setLetter(props.tileId)
  }


  const liClass = ['letter-item', props.isTileVisited && 'visited'].join(' ')
  return(
    <li
      onClick={handleClick}
      className={liClass}
    >
      <div
        onMouseEnter={handleMouseEnter}>
        {props.letter}
      </div>
    </li>
  )
}

const mapStateToProps = (state, props) => {
  return {
    letter: letter(state, props.tileId),
    isTileVisited: isTileVisited(state, props.tileId),
  }
}

const mapDispatchToProps = {
  toggleActive: board.toggleActive,
  setLetter: word.setLetter,
}

export default connect (mapStateToProps, mapDispatchToProps)(LetterItem)

